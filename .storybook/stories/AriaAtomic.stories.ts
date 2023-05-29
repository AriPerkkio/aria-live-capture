import type { Meta, StoryFn } from '@storybook/html';

import { createMountToggle } from '../utils';

export default {
    title: 'Unsupported/aria-atomic',
} as Meta;

export const True: StoryFn = () => {
    return createMountToggle(
        `
        <div aria-live="polite" aria-atomic="true">
            <span>Hello</span>
        </div>
        `,
        `
        <div aria-live="polite" aria-atomic="true">
            <span>Hello</span>
            <span>world</span>
        </div>
        `
    );
};
True.storyName = 'true';

export const False: StoryFn = () => {
    return createMountToggle(
        `
        <div aria-live="polite" aria-atomic="false">
            <span>Hello</span>
        </div>
        `,
        `
        <div aria-live="polite" aria-atomic="false">
            <span>Hello</span>
            <span>world</span>
        </div>
        `
    );
};
False.storyName = 'false';
