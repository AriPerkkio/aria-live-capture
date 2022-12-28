import type { Story, Meta } from '@storybook/html';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import '../expect-extend';
import { createButtonCycle, times } from '../utils';

export default {
    title: 'DOM API Support/Node',
} as Meta;

export const appendChild: Story = () => {
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
};
appendChild.storyName = 'appendChild';
appendChild.play = ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').toBeAnnounced('polite');
};

export const insertBefore: Story = () => {
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
};
insertBefore.storyName = 'insertBefore';
insertBefore.play = ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').toBeAnnounced('polite');
};

export const replaceChild: Story = () => {
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
};
replaceChild.storyName = 'replaceChild';
replaceChild.play = ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').toBeAnnounced('polite');
};

export const textContent: Story = () => {
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
};
textContent.storyName = 'textContent';
textContent.play = ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    times(2)(() => {
        userEvent.click(button);
        expect('Hello world').not.toBeAnnounced();
    });

    userEvent.click(button);
    expect('Hello world').toBeAnnounced('polite');
};

export const nodeValue: Story = () => {
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
};
nodeValue.storyName = 'nodeValue';
nodeValue.play = ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').toBeAnnounced('polite');
};
