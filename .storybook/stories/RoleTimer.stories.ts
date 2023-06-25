import type { StoryFn, Meta } from '@storybook/html';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import '../expect-extend';
import { createMountToggle } from '../utils';

export default {
    title: 'Role/role="timer"',
} as Meta;

export const WithTextContent: StoryFn = () => {
    return createMountToggle(
        `
        <div role="timer">
        </div>
        `,
        `
        <div role="timer">
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
        <div role="timer">
            <div role="status">
            </div>
        </div>
        `,
        `
        <div role="timer">
            <div role="status">
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
        <div role="status">
            <div role="timer">
            </div>
        </div>
        `,
        `
        <div role="status">
            <div role="timer">
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
        <div role="status">
            <div role="timer">
            </div>
        </div>
        `,
        `
        <div role="status">
            <div role="timer">
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
    expect('world').not.toBeAnnounced('polite');

    await userEvent.click(button);
    expect('world').toBeAnnounced('polite');
    expect('Hello').not.toBeAnnounced();
    expect('Hello world').not.toBeAnnounced();
};
