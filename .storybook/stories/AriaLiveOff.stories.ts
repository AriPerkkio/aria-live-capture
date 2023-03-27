import type { Meta, Story } from '@storybook/html';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import '../expect-extend';
import { addStoryName, createMountToggle } from '../utils';

export default {
    title: 'Aria-live/aria-live="off"',
} as Meta;

export const WithTextContent: Story = () => {
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
addStoryName(SiblingIsVisible, 'PARTIAL');
SiblingIsVisible.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('world').not.toBeAnnounced();

    userEvent.click(button);
    expect('world').toBeAnnounced('polite');
    expect('Hello').not.toBeAnnounced();
    expect('Hello world').not.toBeAnnounced();
};