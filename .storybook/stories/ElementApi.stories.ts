import { createButtonCycle } from '../utils';

export default {
    title: 'DOM API Support/Element',
};

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
setAttribute.storyName = 'setAttribute';

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
insertAdjacentElement.storyName = 'insertAdjacentElement';

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
insertAdjacentHTML.storyName = 'insertAdjacentHTML';

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
insertAdjacentText.storyName = 'insertAdjacentText';

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
before.storyName = 'before';

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
append.storyName = 'append';

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
prepend.storyName = 'prepend';

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
removeAttribute.storyName = 'removeAttribute';

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
removeChild.storyName = 'removeChild';
