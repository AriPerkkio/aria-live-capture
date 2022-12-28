import type { Story, Meta } from '@storybook/html';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import '../expect-extend';
import { createButtonCycle, times } from '../utils';

export default {
    title: 'DOM API Support/ShadowRoot',
} as Meta;

export const LiveRegionInsideShadowDOM: Story = () => {
    let shadowRoot: ShadowRoot;
    let element: HTMLElement;

    return createButtonCycle(
        parent => {
            const host = document.createElement('div');
            parent.appendChild(host);

            shadowRoot = host.attachShadow({ mode: 'open' });
        },
        () => {
            element = document.createElement('div');
            element.setAttribute('aria-live', 'polite');

            shadowRoot.appendChild(element);
        },
        () => {
            element.textContent = 'Hello world';
        }
    );
};
LiveRegionInsideShadowDOM.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    times(2)(() => {
        userEvent.click(button);
        expect('Hello world').not.toBeAnnounced();
    });

    userEvent.click(button);
    expect('Hello world').toBeAnnounced('polite');
};

export const LiveRegionWrappingShadowDOM: Story = () => {
    let shadowRoot: ShadowRoot;

    return createButtonCycle(
        parent => {
            const region = document.createElement('div');
            region.setAttribute('aria-live', 'polite');
            parent.appendChild(region);

            const host = document.createElement('div');
            region.appendChild(host);

            shadowRoot = host.attachShadow({ mode: 'open' });
        },
        () => {
            const element = document.createElement('div');
            element.textContent = 'Hello world';

            shadowRoot.appendChild(element);
        }
    );
};
LiveRegionWrappingShadowDOM.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    times(2)(() => {
        userEvent.click(button);
        expect('Hello world').not.toBeAnnounced();
    });

    userEvent.click(button);
    expect('Hello world').toBeAnnounced('polite');
};

export const LiveRegionDeeplyInShadowDOM: Story = () => {
    let third: HTMLElement;
    let last: ShadowRoot;

    return createButtonCycle(
        parent => {
            const first = document.createElement('div');
            parent.appendChild(first);

            const second = document.createElement('div');
            first.attachShadow({ mode: 'open' }).appendChild(second);

            third = document.createElement('div');
            second.attachShadow({ mode: 'open' }).appendChild(third);

            const fourth = document.createElement('div');
            third.attachShadow({ mode: 'open' }).appendChild(fourth);

            last = fourth.attachShadow({ mode: 'open' });
        },
        () => {
            third.setAttribute('aria-live', 'polite');
        },
        () => {
            const hello = document.createElement('span');
            hello.textContent = 'Hello ';

            const world = document.createElement('span');
            world.textContent = 'world';

            const element = document.createElement('div');
            element.appendChild(hello);
            element.appendChild(world);

            last.appendChild(element);
        }
    );
};
LiveRegionDeeplyInShadowDOM.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    times(3)(() => {
        userEvent.click(button);
        expect('Hello world').not.toBeAnnounced();
    });

    userEvent.click(button);
    expect('Hello world').toBeAnnounced('polite');
};

export const LiveRegionWrappingElementAndShadowDOM: Story = () => {
    let shadowRoot: ShadowRoot;

    return createButtonCycle(
        parent => {
            const region = document.createElement('div');
            region.setAttribute('aria-live', 'polite');
            parent.appendChild(region);

            const host = document.createElement('div');
            region.appendChild(host);

            shadowRoot = host.attachShadow({ mode: 'open' });
        },
        () => {
            const hello = document.createElement('div');
            hello.textContent = 'Hello';

            const world = document.createElement('div');
            world.textContent = 'world';

            shadowRoot.appendChild(hello);
            shadowRoot.host.appendChild(world);
        }
    );
};
LiveRegionWrappingElementAndShadowDOM.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    times(2)(() => {
        userEvent.click(button);
        expect('Hello').not.toBeAnnounced();
    });

    userEvent.click(button);
    expect('Hello').toBeAnnounced('polite');
};

export const VisibilityToggle: Story = () => {
    let shadowRoot: ShadowRoot;

    const element = document.createElement('div');
    element.textContent = 'Hello world';

    function appendChild() {
        shadowRoot.appendChild(element);
    }
    function removeChild() {
        shadowRoot.removeChild(element);
    }

    return createButtonCycle(
        parent => {
            const region = document.createElement('div');
            region.setAttribute('aria-live', 'polite');
            parent.appendChild(region);

            const host = document.createElement('div');
            region.appendChild(host);

            shadowRoot = host.attachShadow({ mode: 'open' });
        },
        ...Array(50)
            .fill([appendChild, removeChild])
            .reduce((all, methods) => [...all, ...methods], [])
    );
};
VisibilityToggle.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').toBeAnnounced('polite');
};
