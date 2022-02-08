/*
 * This file is mostly to avoid circular dependencies
 */

export function isElement(node: Node | null): node is Element {
    return node != null && node.nodeType === Node.ELEMENT_NODE;
}

export function isShadowRoot(node: Node | null): node is ShadowRoot {
    return node != null && node instanceof ShadowRoot;
}

export function isDocument(node: Node | null): node is Document {
    return node != null && node.nodeType === Node.DOCUMENT_NODE;
}
