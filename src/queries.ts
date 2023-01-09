import { getConfig } from './config';
import { isDocument, isElement, isShadowRoot } from './dom-node-safe-guards';

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

/**
 * `querySelectorAll` which includes all contents of all `ShadowRoot`'s.
 * Note that return type is directly `Element[]` instead of `NodeListOf`.
 */
export function querySelectorAll(
    context: Document | Element,
    ...args: Parameters<(typeof context)['querySelectorAll']>
): Element[] {
    if (!getConfig().includeShadowDom) {
        return Array.from(context.querySelectorAll(...args));
    }

    const roots = [context, ...findShadowRoots([context])];

    return roots.reduce<Element[]>(
        (all, root) => [...all, ...root.querySelectorAll(...args)],
        []
    );
}

/**
 * Finds `ShadowRoot`'s and their nested `ShadowRoot`'s
 * - This is highly inspired by Cypress: https://github.com/cypress-io/cypress/blob/develop/packages/driver/src/dom/elements/shadow.ts
 */
function findShadowRoots(
    nodes: Node[],
    shadowRoots: ShadowRoot[] = []
): ShadowRoot[] {
    if (nodes.length === 0) return shadowRoots;

    // Find new nested shadow roots
    const rootsFromThisLevel = nodes.reduce<ShadowRoot[]>(
        (all, node) => [...all, ...findShadowRootsOfNode(node)],
        []
    );

    // Check whether newly found shadow roots have nested shadow roots
    return findShadowRoots(rootsFromThisLevel, [
        ...shadowRoots,
        ...rootsFromThisLevel,
    ]);
}

/**
 * Finds all `ShadowRoot`'s of given node. Does not traverse nested `ShadowRoot`'s.
 */
function findShadowRootsOfNode(root: Node): ShadowRoot[] {
    const doc = root.getRootNode({ composed: true });
    const shadowRoots: ShadowRoot[] = [];

    if (!isDocument(doc)) return shadowRoots;

    if (isElement(root) && root.shadowRoot) {
        shadowRoots.push(root.shadowRoot);
    }

    const treeWalker = doc.createTreeWalker(
        root,
        NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_DOCUMENT_FRAGMENT,
        { acceptNode: acceptNodesWithShadowRoot }
    );

    function collectRoots(roots: ShadowRoot[]): ShadowRoot[] {
        const nextNode = treeWalker.nextNode();

        if (!isElement(nextNode)) return roots;
        if (!nextNode.shadowRoot) return roots;

        return collectRoots([...roots, nextNode.shadowRoot]);
    }

    return collectRoots(shadowRoots);
}

function acceptNodesWithShadowRoot(node: Node): number {
    if (isElement(node) && node.shadowRoot) {
        return NodeFilter.FILTER_ACCEPT;
    }

    return NodeFilter.FILTER_SKIP;
}
