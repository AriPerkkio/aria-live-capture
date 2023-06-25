import type { Meta, StoryFn } from '@storybook/html';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import '../expect-extend';
import { createMountToggle } from '../utils';

export default {
    title: 'Aria-live/aria-live="off"',
} as Meta;

export const WithTextContent: StoryFn = () => {
    return createMountToggle(
        `
        <div aria-live="off">
        </div>
        `,
        `
        <div aria-live="off">
            Hello world
        </div>
        `
    );
};
WithTextContent.storyName = 'With text content ❌';
WithTextContent.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    await userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();
};

export const WrapsLiveRegion: StoryFn = () => {
    return createMountToggle(
        `
        <div aria-live="off">
            <div aria-live="polite">
            </div>
        </div>
        `,
        `
        <div aria-live="off">
            <div aria-live="polite">
                Hello world
            </div>
        </div>
        `
    );
};
WrapsLiveRegion.storyName = 'Wraps live region ✅';
WrapsLiveRegion.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    await userEvent.click(button);
    expect('Hello world').toBeAnnounced('polite');
};

export const WrappedInLiveRegion: StoryFn = () => {
    return createMountToggle(
        `
        <div aria-live="polite">
            <div aria-live="off">
            </div>
        </div>
        `,
        `
        <div aria-live="polite">
            <div aria-live="off">
                Hello world
            </div>
        </div>
        `
    );
};
WrappedInLiveRegion.storyName = 'Wrapped in live region ❌';
WrappedInLiveRegion.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    await userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();
};

export const SiblingIsVisible: StoryFn = () => {
    return createMountToggle(
        `
        <div aria-live="polite">
            <div aria-live="off">
            </div>
        </div>
        `,
        `
        <div aria-live="polite">
            <div aria-live="off">
                Hello
            </div>
            <div>
                world
            </div>
        </div>
        `
    );
};
SiblingIsVisible.storyName = 'Sibling is visible ⚠️';
SiblingIsVisible.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('world').not.toBeAnnounced();

    await userEvent.click(button);
    expect('world').toBeAnnounced('polite');
    expect('Hello').not.toBeAnnounced();
    expect('Hello world').not.toBeAnnounced();
};
