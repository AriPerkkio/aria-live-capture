import { isElement } from '../src/utils';

interface Attribute {
    key: string;
    value: string;
}

export function createElement(html: string): Element {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = trimWhitespace(html);

    if (!wrapper.hasChildNodes()) {
        throw new Error('Expected to have child nodes');
    }

    if (wrapper.childElementCount > 1) {
        throw new Error('Expected to have a single child');
    }

    const [element] = wrapper.children;

    if (!isElement(element)) {
        throw new Error('Expected to contain an Element');
    }

    return element;
}

export function update(current: Node, next: Node) {
    const childrenToAdd = Array.from(next.childNodes).slice(
        current.childNodes.length
    );
    const childrenToRemove: any[] = [];

    current.childNodes.forEach((currentChild, index) => {
        const nextChild = next.childNodes[index];

        if (!nextChild) {
            return childrenToRemove.push(currentChild);
        }

        if (currentChild.hasChildNodes() || nextChild.hasChildNodes()) {
            update(currentChild, nextChild);
        }
    });

    for (const child of childrenToRemove) {
        current.removeChild(child);
    }

    for (const child of childrenToAdd) {
        current.appendChild(child);
    }

    if (isElement(current)) {
        const currentAttributes = getAttributes(current);
        const nextAttributes = getAttributes(next);

        const nextIsElement = isElement(next);

        for (const { key, value } of nextAttributes) {
            // Update changed attributes and add new attributes
            if (current.getAttribute(key) !== value) {
                current.setAttribute(key, value);
            }
        }

        for (const { key } of currentAttributes) {
            if (nextIsElement) {
                // Remove missing attributes
                if (!next.hasAttribute(key)) {
                    current.removeAttribute(key);
                }
            }
        }
    }
}

function getAttributes(node: Node): Attribute[] {
    if (!isElement(node)) return [];

    return node
        .getAttributeNames()
        .reduce(
            (all, key) => [
                ...all,
                { key, value: node.getAttribute(key) || '' },
            ],
            [] as Attribute[]
        );
}

function trimWhitespace(text: string) {
    return text
        .replace(/\s+/g, ' ')
        .replace(/\n+/, '\n')
        .replace(/> *(\w*) *</g, '>$1<')
        .trim();
}
