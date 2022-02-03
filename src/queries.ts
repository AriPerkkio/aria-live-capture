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

/**
 * `Node.parentNode` as method which traverses tree up when `ShadowRoot` is encountered
 */
export function getParentNode(node: Node): Node['parentNode'] {
    if (node.parentNode || !getConfig().includeShadowDom) {
        return node.parentNode;
    }

    if (isShadowRoot(node)) {
        return node.host;
    }

    return null;
}
