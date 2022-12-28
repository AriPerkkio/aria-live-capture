import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import type { Story, Meta } from '@storybook/html';

import '../expect-extend';
import { addStoryName, createMountToggle } from '../utils';

export default {
    title: 'Elements/<output>',
} as Meta;

export const LiveRegionAvailableBeforeContent: Story = () => {
    return createMountToggle(
        `
        <output>
        </output>
        `,
        `
        <output>
            Hello world
        </output>
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

export const LiveRegionNotAvailableBeforeContent: Story = () => {
    return createMountToggle(
        `
        <div>
        </div>
        `,
        `
        <div>
            <output>
                Hello world
            </output>
        </div>
        `
    );
};
addStoryName(LiveRegionNotAvailableBeforeContent, 'FAIL');
LiveRegionNotAvailableBeforeContent.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();
};
