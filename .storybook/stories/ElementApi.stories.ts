import type { Story, Meta } from '@storybook/html';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import '../expect-extend';
import { createButtonCycle, times } from '../utils';

export default {
    title: 'DOM API Support/Element',
} as Meta;

export const setAttribute: Story = () => {
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
setAttribute.play = ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    times(2)(() => {
        userEvent.click(button);
        expect('Hello world').not.toBeAnnounced();
    });

    userEvent.click(button);
    expect('Hello world').toBeAnnounced('polite');
};

export const insertAdjacentElement: Story = () => {
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
insertAdjacentElement.play = ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').toBeAnnounced('polite');
};

export const insertAdjacentHTML: Story = () => {
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
insertAdjacentHTML.play = ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').toBeAnnounced('polite');
};

export const insertAdjacentText: Story = () => {
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
insertAdjacentText.play = ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').toBeAnnounced('polite');
};

export const before: Story = () => {
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
before.play = ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').toBeAnnounced('polite');
};

export const append: Story = () => {
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
append.play = ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').toBeAnnounced('polite');
};

export const prepend: Story = () => {
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
prepend.play = ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').toBeAnnounced('polite');
};

export const replaceChildren: Story = () => {
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
replaceChildren.play = ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    times(2)(() => {
        userEvent.click(button);
        expect('Hello world').not.toBeAnnounced();
    });

    userEvent.click(button);
    expect('Hello world').toBeAnnounced('polite');
};

export const removeAttribute: Story = () => {
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
removeAttribute.play = ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    times(4)(() => {
        userEvent.click(button);
        expect('Hello world').not.toBeAnnounced();
    });

    userEvent.click(button);
    expect('Hello world').toBeAnnounced('polite');
};

export const removeChild: Story = () => {
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
removeChild.play = ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello').toBeAnnounced('polite');
};
