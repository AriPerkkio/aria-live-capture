import { getConfig } from './config';
import { isElement, isShadowRoot } from './dom-node-safe-guards';

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

/**
 * `Node.childNodes` as method which traverses tree down when `ShadowRoot` is encountered
 */
export function getChildNodes(node: Node): Node['childNodes'] {
    if (getConfig().includeShadowDom && isElement(node) && node.shadowRoot) {
        return getChildNodes(node.shadowRoot);
    }

    return node.childNodes;
}
