import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import type { StoryFn, Meta } from '@storybook/html';

import '../expect-extend';
import { createMountToggle } from '../utils';

export default {
    title: 'Elements/<output>',
} as Meta;

export const LiveRegionAvailableBeforeContent: StoryFn = () => {
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
LiveRegionAvailableBeforeContent.storyName =
    'Live region available before content ✅';
LiveRegionAvailableBeforeContent.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').toBeAnnounced('polite');
};

export const LiveRegionUnavailableBeforeContent: StoryFn = () => {
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
LiveRegionUnavailableBeforeContent.storyName =
    'Live region unavailable before content ❌';
LiveRegionUnavailableBeforeContent.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();
};
