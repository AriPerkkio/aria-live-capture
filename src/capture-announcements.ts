import {
    getClosestElement,
    getClosestLiveRegion,
    isElement,
    isHidden,
    isInDOM,
    isLiveRegionAttribute,
    LIVE_REGION_QUERY,
    PolitenessSetting,
    resolvePolitenessSetting,
} from './utils';
import { interceptMethod, interceptSetter, Restore } from './interceptors';

interface Options {
    /** Callback invoked when announcement is captured */
    onCapture: (
        textContent: string,
        politenessSetting: Exclude<PolitenessSetting, 'off'>
    ) => void;

    /** Callback invoked when incorrectly used status message is captured */
    onIncorrectStatusMessage?: (textContent: string) => void;
}

const WHITE_SPACE_REGEXP = /\s+/g;

// Map of live regions to previous textContent
const liveRegions = new Map<Node, string | null>();

export default function CaptureAnnouncements(options: Options): Restore {
    const onCapture: Options['onCapture'] = (
        textContent,
        politenessSetting
    ) => {
        const content = trimWhiteSpace(textContent);

        if (content) {
            options.onCapture(content, politenessSetting);
        }
    };

    const onIncorrectStatusMessage: NonNullable<
        Options['onIncorrectStatusMessage']
    > = textContent => {
        if (options.onIncorrectStatusMessage) {
            const content = trimWhiteSpace(textContent);

            if (content) {
                options.onIncorrectStatusMessage(content);
            }
        }
    };

    /**
     * Check whether given node should trigger announcement
     * - Node should be inside live region
     * - Politeness setting should not be off
     * - `textContent` of live region should have changed
     */
    function updateAnnouncements(node: Node) {
        const element = getClosestElement(node);
        if (!element) return;
        if (isHidden(element)) return;

        const closestLiveRegion = getClosestLiveRegion(element);

        if (closestLiveRegion) {
            const politenessSetting = resolvePolitenessSetting(
                closestLiveRegion
            );

            if (politenessSetting !== 'off' && isInDOM(closestLiveRegion)) {
                const previousText = liveRegions.get(node);
                const newText = node.textContent || '';

                if (previousText !== newText) {
                    onCapture(newText, politenessSetting);
                    liveRegions.set(node, newText);
                }
            }
        }
    }

    function addLiveRegion(liveRegion: Element) {
        if (liveRegions.has(liveRegion)) return;
        if (isHidden(liveRegion)) return;

        const politenessSetting = resolvePolitenessSetting(liveRegion);
        if (politenessSetting === 'off') return;

        liveRegions.set(liveRegion, liveRegion.textContent);

        // Content of assertive live regions is announced on initial mount
        if (liveRegion.textContent) {
            if (politenessSetting === 'assertive') {
                onCapture(liveRegion.textContent, politenessSetting);
            } else if (politenessSetting === 'polite') {
                onIncorrectStatusMessage(liveRegion.textContent);
            }
        }
    }

    /**
     * Check DOM for live regions and update `liveRegions` store
     * - TODO: Could be optimized based on appended/updated child
     */
    function updateLiveRegions() {
        for (const liveRegion of document.querySelectorAll(LIVE_REGION_QUERY)) {
            addLiveRegion(liveRegion);
        }
    }

    function onTextContentChange(this: Node) {
        updateAnnouncements(this);
    }

    // https://github.com/facebook/react/blob/9198a5cec0936a21a5ba194a22fcbac03eba5d1d/packages/react-dom/src/client/setTextContent.js#L12-L35
    function onNodeValueChange(this: Node) {
        updateAnnouncements(this);
    }

    /**
     * Shared handler for methods which mount new nodes on DOM, e.g. appendChild, insertBefore
     */
    function onNodeMount(node: Node) {
        updateLiveRegions();
        updateAnnouncements(node);
    }

    function onInsertAdjacent(
        this: Node,
        position: string,
        elementOrText: Element | string
    ) {
        if (!this.parentNode) {
            const log =
                typeof elementOrText === 'string'
                    ? elementOrText
                    : elementOrText.outerHTML;

            throw new Error(
                `Unable to find parentNode for element/text ${log}`
            );
        }

        onNodeMount(this.parentNode);
    }

    function onSetAttribute(
        this: Element,
        ...args: Parameters<Element['setAttribute']>
    ): void {
        if (!isElement(this)) return;
        if (!isInDOM(this)) return;
        if (!args[0]) return;

        const [attribute] = args;

        switch (attribute) {
            case 'role':
            case 'aria-live': {
                const isAlreadyTracked = liveRegions.has(this);
                const liveRegionAttribute = isLiveRegionAttribute(args[1]);

                // Attribute value was changed from live region attribute to something else.
                // Stop tracking this element.
                if (isAlreadyTracked && !liveRegionAttribute) {
                    liveRegions.delete(this);
                    return;
                }

                // Previous value was not live region attribute value
                if (!isAlreadyTracked && liveRegionAttribute) {
                    return updateLiveRegions();
                }

                // Value was changed to assertive - announce content immediately
                if (
                    isAlreadyTracked &&
                    liveRegionAttribute &&
                    resolvePolitenessSetting(this) === 'assertive'
                ) {
                    return updateAnnouncements(this);
                }
                break;
            }

            case 'aria-hidden': {
                updateLiveRegions();
                return updateAnnouncements(this);
            }

            default:
                return;
        }
    }

    function onRemoveAttributeAfter(
        this: Element,
        ...args: Parameters<Element['removeAttribute']>
    ) {
        if (!isElement(this)) return;

        // Note that at this point we are not 100% sure the removed attribute
        // actually existed on the node. Do not make assumptions based on that
        // here, e.g. no blindly removing the node from tracked nodes.
        const [attribute] = args;

        if (attribute === 'aria-hidden') {
            updateLiveRegions();
            updateAnnouncements(this);
        }
    }

    // prettier-ignore
    const cleanups: Restore[] = [
        interceptMethod(Element.prototype, 'setAttribute', onSetAttribute),
        interceptMethod(Element.prototype, 'removeAttribute', onRemoveAttributeBefore, 'BEFORE'),
        interceptMethod(Element.prototype, 'removeAttribute', onRemoveAttributeAfter, 'AFTER'),
        interceptMethod(Element.prototype, 'removeChild', onRemoveChild),
        interceptMethod(Element.prototype, 'insertAdjacentElement', onInsertAdjacent),
        interceptMethod(Element.prototype, 'insertAdjacentHTML', onInsertAdjacent),
        interceptMethod(Element.prototype, 'insertAdjacentText', onInsertAdjacent),
        interceptMethod(Element.prototype, 'before', onNodeMount),
        interceptMethod(Element.prototype, 'append', onNodeMount),
        interceptMethod(Element.prototype, 'prepend', onNodeMount),
        interceptMethod(Node.prototype, 'appendChild', onNodeMount),
        interceptMethod(Node.prototype, 'insertBefore', onNodeMount),
        interceptMethod(Node.prototype, 'replaceChild', onNodeMount),

        interceptSetter(Node.prototype, 'textContent', onTextContentChange),
        interceptSetter(Node.prototype, 'nodeValue', onNodeValueChange)
    ];

    return function restore() {
        cleanups.splice(0).forEach(cleanup => cleanup());
        liveRegions.clear();
    };
}

function onRemoveAttributeBefore(
    this: Element,
    ...args: Parameters<Element['removeAttribute']>
) {
    if (!isElement(this)) return;

    const [attribute] = args;

    // Element must have the attribute about to be removed
    if (!this.hasAttribute(attribute)) return;

    // TODO: Should detect if we have role AND aria-live, and one is removed.
    if (attribute === 'role' || attribute === 'aria-live') {
        // Live region attribute is removed -> Element is no longer a live region
        if (liveRegions.has(this)) {
            liveRegions.delete(this);
        }
    }
}

function onRemoveChild(
    this: Element,
    ...args: Parameters<Element['removeChild']>
) {
    if (args[0] == null || !isElement(args[0])) return;

    const elementAndItsLiveRegionChildren = [
        args[0],
        ...args[0].querySelectorAll(LIVE_REGION_QUERY),
    ];

    // Check whether removed element or any of its children were tracked
    for (const element of elementAndItsLiveRegionChildren) {
        if (liveRegions.has(element)) {
            liveRegions.delete(element);
        }
    }
}

function trimWhiteSpace(text: string): string | null {
    const trimmed = text.trim().replace(WHITE_SPACE_REGEXP, ' ');
    return trimmed.length > 0 ? trimmed : null;
}

/** Not part of public API, do not use */
export const __PrivateUnstableAPI = {
    liveRegions,
};
