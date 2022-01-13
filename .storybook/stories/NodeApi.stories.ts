import { createButtonCycle } from '../utils';

export default {
    title: 'DOM API Support/Node',
};
export function appendChild() {
    let element: HTMLElement;

    return createButtonCycle(
        parent => {
            element = document.createElement('div');
            element.setAttribute('aria-live', 'polite');
            parent.appendChild(element);
        },
        () => {
            const child = document.createElement('div');
            child.textContent = 'Hello world';

            element.appendChild(child);
        }
    );
}
appendChild.storyName = 'appendChild';

export function insertBefore() {
    let element: HTMLElement;
    let child: HTMLElement;

    return createButtonCycle(
        parent => {
            element = document.createElement('div');
            element.setAttribute('aria-live', 'polite');

            child = document.createElement('div');
            element.appendChild(child);

            parent.appendChild(element);
        },
        () => {
            const sibling = document.createElement('span');
            sibling.textContent = 'Hello world';

            element.insertBefore(sibling, child);
        }
    );
}
insertBefore.storyName = 'insertBefore';

export function replaceChild() {
    let element: HTMLElement;
    let child: HTMLElement;

    return createButtonCycle(
        parent => {
            element = document.createElement('div');
            element.setAttribute('aria-live', 'polite');

            child = document.createElement('div');
            element.appendChild(child);

            parent.appendChild(element);
        },
        () => {
            const newChild = document.createElement('span');
            newChild.textContent = 'Hello world';

            element.replaceChild(newChild, child);
        }
    );
}
replaceChild.storyName = 'replaceChild';

export function textContent() {
    let element: HTMLElement;
    let child: HTMLElement;

    return createButtonCycle(
        parent => {
            element = document.createElement('div');
            element.setAttribute('aria-live', 'polite');

            parent.appendChild(element);
        },
        () => {
            element.textContent = 'Hello world';

            child = document.createElement('span');
            element.appendChild(child);
        },
        () => {
            child.textContent = 'from child';
        }
    );
}
textContent.storyName = 'textContent';

export function nodeValue() {
    let element: HTMLElement;
    let textNode: Node;

    return createButtonCycle(
        parent => {
            element = document.createElement('div');
            element.setAttribute('aria-live', 'polite');

            textNode = document.createTextNode('');
            element.appendChild(textNode);

            parent.appendChild(element);
        },
        () => {
            textNode.nodeValue = 'Hello world';
        }
    );
}
nodeValue.storyName = 'nodeValue';
