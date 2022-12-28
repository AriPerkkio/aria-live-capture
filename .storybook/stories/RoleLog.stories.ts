import type { Story, Meta } from '@storybook/html';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import '../expect-extend';
import { addStoryName, createMountToggle } from '../utils';

export default {
    title: 'Role/role="log"',
} as Meta;

export const LiveRegionAvailableBeforeContent: Story = () => {
    return createMountToggle(
        `
        <div role="log">
        </div>
        `,
        `
        <div role="log">
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
        <div role="log">
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
