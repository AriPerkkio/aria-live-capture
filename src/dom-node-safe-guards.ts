/*
 * This file is mostly to avoid circular dependencies
 */

export function isElement(node: Node | null): node is Element {
    return node != null && node.nodeType === Node.ELEMENT_NODE;
}
