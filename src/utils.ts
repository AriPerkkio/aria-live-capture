export type PolitenessSetting = 'polite' | 'assertive' | 'off';

const LIVE_REGION_ROLES = ['status', 'log', 'alert'] as const;
type LiveRegionRole = typeof LIVE_REGION_ROLES[number];

const LIVE_REGION_QUERY = [
    '[role="status"]',
    '[role="log"]',
    '[role="alert"]',
    '[aria-live="polite"]',
    '[aria-live="assertive"]',
    'output',

    // Roles with implicit aria-live="off"
    // '[role="marquee"]',
    // '[role="timer"]',
].join(', ');

const HIDDEN_QUERY = '[aria-hidden="true"]';

export function getAllLiveRegions(
    context: Document | Element
): ReturnType<typeof context['querySelectorAll']> {
    return context.querySelectorAll(LIVE_REGION_QUERY);
}

export function isElement(node: Node | null): node is Element {
    return node != null && node.nodeType === Node.ELEMENT_NODE;
}

export function getClosestElement(node: Node): Element | null {
    if (isElement(node)) {
        return node;
    }

    if (node.parentNode) {
        return getClosestElement(node.parentNode);
    }

    return null;
}

export function isLiveRegionAttribute(
    attribute: string
): attribute is LiveRegionRole | PolitenessSetting {
    return (
        LIVE_REGION_ROLES.includes(attribute as LiveRegionRole) ||
        isPolitenessSetting(attribute)
    );
}

export function isInDOM(node: Node): boolean {
    return isElement(node) && node.closest('html') != null;
}

// TODO: Support `hidden` and CSS attributes:
// https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-hidden_attribute#best_practices
export function isHidden(node: Node): boolean {
    const element = getClosestElement(node);

    if (!element) return true;

    if (element.getAttribute('aria-hidden') === 'true') {
        return true;
    }

    if (element.getAttribute('aria-live') === 'off') {
        return true;
    }

    const role = element.getAttribute('role');
    if (role === 'marquee' || role === 'timer') {
        return true;
    }

    return element.closest(HIDDEN_QUERY) != null;
}

export function getClosestLiveRegion(element: Element | null): Element | null {
    return element ? element.closest(LIVE_REGION_QUERY) : null;
}

function isPolitenessSetting(
    setting: string | null
): setting is PolitenessSetting {
    return setting === 'polite' || setting === 'assertive' || setting === 'off';
}

/**
 * Resolve politeness setting of given node
 * - Recursively traverse tree up until live region is found
 */
export function resolvePolitenessSetting(node: Node | null): PolitenessSetting {
    if (!node || !isElement(node)) return 'off';

    const ariaLive = node.getAttribute('aria-live');
    if (isPolitenessSetting(ariaLive)) return ariaLive;

    const role = node.getAttribute('role');
    if (role === 'marquee' || role === 'timer') return 'off';
    if (role === 'status' || role === 'log') return 'polite';
    if (role === 'alert') return 'assertive';

    if (node.tagName.toLowerCase() === 'output') {
        return 'polite';
    }

    const closestLiveRegion = getClosestLiveRegion(node);

    // Element.closest may return itself. Find the closest parent.
    if (closestLiveRegion === node) {
        return resolvePolitenessSetting(
            getClosestLiveRegion(node.parentElement)
        );
    }

    return resolvePolitenessSetting(closestLiveRegion);
}

const WHITE_SPACE_REGEXP = /\s+/g;

export function trimWhiteSpace(text: string): string | null {
    const trimmed = text.trim().replace(WHITE_SPACE_REGEXP, ' ');
    return trimmed.length > 0 ? trimmed : null;
}

/**
 * Get text content of a `Node`
 */
export function getTextContent(node: Node | null): string | null {
    if (!node) return null;
    if (isHidden(node)) return null;

    if (node.nodeType === Node.TEXT_NODE) {
        return node.textContent ? trimWhiteSpace(node.textContent) : null;
    }

    if (!node.hasChildNodes()) return null;

    return trimWhiteSpace(
        Array.from(node.childNodes)
            .map(getTextContent)
            .filter(Boolean)
            .join(' ')
    );
}
