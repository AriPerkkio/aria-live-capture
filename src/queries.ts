import { getConfig } from './config';
import { isShadowRoot } from './dom-node-safe-guards';

/**
 * `Element.closest` which traverses tree up when `ShadowRoot` is encountered
 */
export function closest(
    element: Element,
    ...args: Parameters<Element['closest']>
): ReturnType<Element['closest']> {
    const result = element.closest(...args);

    if (result || !getConfig().includeShadowDom) {
        return result;
    }

    const rootNode = element.getRootNode();

    if (isShadowRoot(rootNode)) {
        return closest(rootNode.host, ...args);
    }

    return null;
}
