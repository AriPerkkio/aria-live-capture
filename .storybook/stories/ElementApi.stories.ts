import type { StoryFn, Meta } from '@storybook/html';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import '../expect-extend';
import { createButtonCycle, times } from '../utils';

export default {
    title: 'DOM API Support/Element',
} as Meta;

export const setAttribute: StoryFn = () => {
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
};
setAttribute.storyName = 'setAttribute';
setAttribute.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    await times(2)(async () => {
        await userEvent.click(button);
        expect('Hello world').not.toBeAnnounced();
    });

    await userEvent.click(button);
    expect('Hello world').toBeAnnounced('polite');
};

export const insertAdjacentElement: StoryFn = () => {
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
};
insertAdjacentElement.storyName = 'insertAdjacentElement';
insertAdjacentElement.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    await userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();

    await userEvent.click(button);
    expect('Hello world').toBeAnnounced('polite');
};

export const insertAdjacentHTML: StoryFn = () => {
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
};
insertAdjacentHTML.storyName = 'insertAdjacentHTML';
insertAdjacentHTML.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    await userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();

    await userEvent.click(button);
    expect('Hello world').toBeAnnounced('polite');
};

export const insertAdjacentText: StoryFn = () => {
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
};
insertAdjacentText.storyName = 'insertAdjacentText';
insertAdjacentText.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    await userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();

    await userEvent.click(button);
    expect('Hello world').toBeAnnounced('polite');
};

export const before: StoryFn = () => {
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
};
before.storyName = 'before';
before.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    await userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();

    await userEvent.click(button);
    expect('Hello world').toBeAnnounced('polite');
};

export const append: StoryFn = () => {
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
};
append.storyName = 'append';
append.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    await userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();

    await userEvent.click(button);
    expect('Hello world').toBeAnnounced('polite');
};

export const prepend: StoryFn = () => {
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
};
prepend.storyName = 'prepend';
prepend.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    await userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();

    await userEvent.click(button);
    expect('Hello world').toBeAnnounced('polite');
};

export const replaceChildren: StoryFn = () => {
    let element: HTMLElement;
    let child: HTMLElement;

    return createButtonCycle(
        parent => {
            element = document.createElement('div');
            element.setAttribute('aria-live', 'polite');

            parent.appendChild(element);
        },
        () => {
            element.appendChild(document.createElement('p'));
            element.appendChild(document.createElement('div'));
        },
        () => {
            child = document.createElement('span');
            child.textContent = 'Hello world';
            element.replaceChildren(child);
        }
    );
};
replaceChildren.storyName = 'replaceChildren';
replaceChildren.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    times(2)(async () => {
        await userEvent.click(button);
        expect('Hello world').not.toBeAnnounced();
    });

    await userEvent.click(button);
    expect('Hello world').toBeAnnounced('polite');
};

export const removeAttribute: StoryFn = () => {
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
};
removeAttribute.storyName = 'removeAttribute';
removeAttribute.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    times(4)(async () => {
        await userEvent.click(button);
        expect('Hello world').not.toBeAnnounced();
    });

    await userEvent.click(button);
    expect('Hello world').toBeAnnounced('polite');
};

export const removeChild: StoryFn = () => {
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
};
removeChild.storyName = 'removeChild';
removeChild.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello').not.toBeAnnounced();

    await userEvent.click(button);
    expect('Hello').not.toBeAnnounced();

    await userEvent.click(button);
    expect('Hello').toBeAnnounced('polite');
};
