import type { Meta, Story } from '@storybook/html';

import { createButtonCycle } from '../utils';

export default {
    title: 'Unsupported/aria-busy',
} as Meta;

export const AriaBusy: Story = () => {
    let element: HTMLElement;

    return createButtonCycle(
        parent => {
            element = document.createElement('div');
            element.setAttribute('aria-live', 'polite');
            parent.appendChild(element);
        },
        () => {
            element.setAttribute('aria-busy', 'true');
        },
        () => {
            const child = document.createElement('div');
            child.textContent = 'Hello';
            element.appendChild(child);
        },
        () => {
            const child = document.createElement('div');
            child.textContent = 'world';
            element.appendChild(child);
        },
        () => {
            element.setAttribute('aria-busy', 'false');
        }
    );
};
AriaBusy.storyName = 'true/false';
