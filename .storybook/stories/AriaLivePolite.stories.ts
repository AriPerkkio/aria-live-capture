import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import type { Story, Meta } from '@storybook/html';

import '../expect-extend';
import { addStoryName, createMountToggle } from '../utils';

export default {
    title: 'Aria-live/aria-live="polite"',
} as Meta;

export const LiveRegionAvailableBeforeContent: Story = () => {
    return createMountToggle(
        `
        <div aria-live="polite">
        </div>
        `,
        `
        <div aria-live="polite">
            Hello world
        </div>
        `
    );
};
addStoryName(LiveRegionAvailableBeforeContent, 'PASS');
LiveRegionAvailableBeforeContent.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').toBeAnnounced('polite');
};

export const LiveRegionUnavailableBeforeContent: Story = () => {
    return createMountToggle(
        `
        <div></div>
        `,
        `
        <div aria-live="polite">
            Hello world
        </div>
        `
    );
};
addStoryName(LiveRegionUnavailableBeforeContent, 'FAIL');
LiveRegionUnavailableBeforeContent.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();
};
