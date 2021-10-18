import { createButtonCycle } from '../utils';

export default {
    title: 'DOM API Support',
};

setAttribute.storyName = 'Element.setAttribute';
export function setAttribute() {
    let element: HTMLElement;

    return createButtonCycle(
        parent => {
            element = document.createElement('div');
            parent.appendChild(element);
        },
        () => {
            element.setAttribute('aria-live', 'polite');
        },
        () => {
            element.textContent = 'Hello world';
        }
    );
}

insertAdjacentElement.storyName = 'Element.insertAdjacentElement';
export function insertAdjacentElement() {
    let element: HTMLElement;

    return createButtonCycle(
        parent => {
            element = document.createElement('div');
            element.setAttribute('aria-live', 'polite');
            parent.appendChild(element);
        },
        () => {
            const child = document.createElement('span');
            child.textContent = 'Hello world';
            element.insertAdjacentElement('afterbegin', child);
        }
    );
}

insertAdjacentHTML.storyName = 'Element.insertAdjacentHTML';
export function insertAdjacentHTML() {
    let element: HTMLElement;

    return createButtonCycle(
        parent => {
            element = document.createElement('div');
            element.setAttribute('aria-live', 'polite');
            parent.appendChild(element);
        },
        () => {
            element.insertAdjacentHTML(
                'afterbegin',
                '<span>Hello world</span>'
            );
        }
    );
}

insertAdjacentText.storyName = 'Element.insertAdjacentText';
export function insertAdjacentText() {
    let element: HTMLElement;

    return createButtonCycle(
        parent => {
            element = document.createElement('div');
            element.setAttribute('aria-live', 'polite');
            parent.appendChild(element);
        },
        () => {
            element.insertAdjacentText('afterbegin', 'Hello world');
        }
    );
}

before.storyName = 'Element.before';
export function before() {
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

            child.before(sibling);
        }
    );
}

append.storyName = 'Element.append';
export function append() {
    let element: HTMLElement;

    return createButtonCycle(
        parent => {
            element = document.createElement('div');
            element.setAttribute('aria-live', 'polite');

            const child = document.createElement('div');
            element.append(child);

            parent.appendChild(element);
        },
        () => {
            const sibling = document.createElement('span');
            sibling.textContent = 'Hello world';

            element.append(sibling);
        }
    );
}

prepend.storyName = 'Element.prepend';
export function prepend() {
    let element: HTMLElement;

    return createButtonCycle(
        parent => {
            element = document.createElement('div');
            element.setAttribute('aria-live', 'polite');

            const child = document.createElement('div');
            element.append(child);

            parent.appendChild(element);
        },
        () => {
            const sibling = document.createElement('span');
            sibling.textContent = 'Hello world';

            element.prepend(sibling);
        }
    );
}

removeAttribute.storyName = 'Element.removeAttribute';
export function removeAttribute() {
    let element: HTMLElement;
    let child: HTMLElement;

    return createButtonCycle(
        parent => {
            element = document.createElement('div');
            parent.appendChild(element);
        },
        () => {
            element.setAttribute('aria-live', 'polite');
            element.setAttribute('aria-hidden', 'true');
        },
        () => {
            element.textContent = 'Hello world';
        },
        () => {
            element.removeAttribute('aria-hidden');
        },
        () => {
            child = document.createElement('span');
            child.setAttribute('aria-hidden', 'true');
            child.textContent = 'from child';
            element.appendChild(child);
        },
        () => {
            child.removeAttribute('aria-hidden');
        }
    );
}

removeChild.storyName = 'Element.removeChild';
export function removeChild() {
    let element: HTMLElement;
    let sibling: HTMLElement;

    return createButtonCycle(
        parent => {
            element = document.createElement('div');
            element.setAttribute('aria-live', 'polite');

            const child = document.createElement('span');
            child.textContent = 'Hello';
            element.appendChild(child);

            sibling = document.createElement('span');
            sibling.textContent = 'world';
            element.appendChild(sibling);

            parent.appendChild(element);
        },
        () => {
            element.removeChild(sibling);
        }
    );
}

appendChild.storyName = 'Node.appendChild';
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

insertBefore.storyName = 'Node.insertBefore';
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

replaceChild.storyName = 'Node.replaceChild';
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

textContent.storyName = 'Node.textContent';
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

nodeValue.storyName = 'Node.nodeValue';
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
