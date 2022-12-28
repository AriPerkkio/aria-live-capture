import type { Story, Meta } from '@storybook/html';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import '../expect-extend';
import { addStoryName, createMountToggle } from '../utils';

export default {
    title: 'Role/role="timer"',
} as Meta;

export const WithTextContent: Story = () => {
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
addStoryName(WithTextContent, 'FAIL');
WithTextContent.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();
};

export const WrapsLiveRegion: Story = () => {
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
addStoryName(WrapsLiveRegion, 'PASS');
WrapsLiveRegion.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').toBeAnnounced('polite');
};

export const WrappedInLiveRegion: Story = () => {
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
addStoryName(WrappedInLiveRegion, 'FAIL');
WrappedInLiveRegion.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();
};

export const SiblingIsVisible: Story = () => {
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
addStoryName(SiblingIsVisible, 'PARTIAL');
SiblingIsVisible.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('world').not.toBeAnnounced('polite');

    userEvent.click(button);
    expect('world').toBeAnnounced('polite');
    expect('Hello').not.toBeAnnounced();
    expect('Hello world').not.toBeAnnounced();
};
