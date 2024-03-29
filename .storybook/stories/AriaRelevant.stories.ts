import type { Meta, StoryFn } from '@storybook/html';

import { createMountToggle } from '../utils';

export default {
    title: 'Unsupported/aria-relevant',
} as Meta;

export const Additions: StoryFn = () => {
    return createMountToggle(
        `
        <ul aria-live="polite" aria-relevant="additions">
            <li>First</li>
        </ul>
        `,
        `
        <ul aria-live="polite" aria-relevant="additions">
            <li>First</li>
            <li>Second</li>
        </ul>
        `
    );
};
Additions.storyName = 'additions';

export const Removals: StoryFn = () => {
    return createMountToggle(
        `
        <ul aria-live="polite" aria-relevant="removals">
            <li>First</li>
            <li>Second</li>
        </ul>
        `,
        `
        <ul aria-live="polite" aria-relevant="removals">
            <li>First</li>
        </ul>
        `
    );
};
Removals.storyName = 'removals';

export const Text: StoryFn = () => {
    return createMountToggle(
        `
        <div aria-live="polite" aria-relevant="text">
            First
        </div>
        `,
        `
        <div aria-live="polite" aria-relevant="text">
            First, Second
        </div>
        `
    );
};
Text.storyName = 'text';

export const All: StoryFn = () => {
    return createMountToggle(
        `
        <ul aria-live="polite" aria-relevant="all">
            <li>First</li>
            <li>Second</li>

        </ul>
        `,
        `
        <ul aria-live="polite" aria-relevant="all">
            <li>First Hello world</li>

            <li>Third</li>
        </ul>
        `
    );
};
All.storyName = 'all';
