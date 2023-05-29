import type { StoryFn, Meta } from '@storybook/html';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import '../expect-extend';
import { createMountToggle } from '../utils';

export default {
    title: 'Role/role="marquee"',
} as Meta;

export const WithTextContent: StoryFn = () => {
    return createMountToggle(
        `
        <div role="marquee">
        </div>
        `,
        `
        <div role="marquee">
            Hello world
        </div>
        `
    );
};
WithTextContent.storyName = 'With text content ❌';
WithTextContent.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();
};

export const WrapsLiveRegion: StoryFn = () => {
    return createMountToggle(
        `
        <div role="marquee">
            <div role="status">
            </div>
        </div>
        `,
        `
        <div role="marquee">
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

    userEvent.click(button);
    expect('Hello world').toBeAnnounced('polite');
};

export const WrappedInLiveRegion: StoryFn = () => {
    return createMountToggle(
        `
        <div role="status">
            <div role="marquee">
            </div>
        </div>
        `,
        `
        <div role="status">
            <div role="marquee">
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

    userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();
};

export const SiblingIsVisible: StoryFn = () => {
    return createMountToggle(
        `
        <div role="status">
            <div role="marquee">
            </div>
        </div>
        `,
        `
        <div role="status">
            <div role="marquee">
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
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('world').toBeAnnounced('polite');
    expect('Hello world').not.toBeAnnounced();
    expect('world').not.toBeAnnounced();
};
