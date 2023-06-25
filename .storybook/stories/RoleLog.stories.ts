import type { StoryFn, Meta } from '@storybook/html';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import '../expect-extend';
import { createMountToggle } from '../utils';

export default {
    title: 'Role/role="log"',
} as Meta;

export const LiveRegionAvailableBeforeContent: StoryFn = () => {
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
LiveRegionAvailableBeforeContent.storyName =
    'Live region available before content ✅';
LiveRegionAvailableBeforeContent.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    await userEvent.click(button);
    expect('Hello world').toBeAnnounced('polite');
};

export const LiveRegionUnavailableBeforeContent: StoryFn = () => {
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
LiveRegionUnavailableBeforeContent.storyName =
    'Live region unavailable before content ❌';
LiveRegionUnavailableBeforeContent.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    await userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();
};
