import type { StoryFn, Meta } from '@storybook/html';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import '../expect-extend';
import { createMountToggle } from '../utils';

export default {
    title: 'Role/role="alert"',
} as Meta;

export const LiveRegionAvailableBeforeContent: StoryFn = () => {
    return createMountToggle(
        `
        <div role="alert">
        </div>
        `,
        `
        <div role="alert">
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
    expect('Hello world').toBeAnnounced('assertive');
};

export const LiveRegionUnavailableBeforeContent: StoryFn = () => {
    return createMountToggle(
        `
        <div></div>
        `,
        `
        <div role="alert">
            Hello world
        </div>
        `
    );
};
LiveRegionUnavailableBeforeContent.storyName =
    'Live region unavailable before content ✅';
LiveRegionUnavailableBeforeContent.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    await userEvent.click(button);
    expect('Hello world').toBeAnnounced('assertive');
};

export const AnchestorIsHidden: StoryFn = () => {
    return createMountToggle(
        `
        <div aria-hidden="true">
            <div role="alert">
            </div>
        </div>
        `,
        `
        <div aria-hidden="true">
            <div role="alert">
                Hello world
            </div>
        </div>
        `
    );
};
AnchestorIsHidden.storyName = 'Anchestor is hidden ❌';
AnchestorIsHidden.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    await userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();
};

export const LiveRegionIsHidden: StoryFn = () => {
    return createMountToggle(
        `
        <div aria-hidden="true" role="alert">
        </div>
        `,
        `
        <div aria-hidden="true" role="alert">
            Hello world
        </div>
        `
    );
};
LiveRegionIsHidden.storyName = 'Live region is hidden ❌';
LiveRegionIsHidden.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    await userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();
};

export const ContentIsHidden: StoryFn = () => {
    return createMountToggle(
        `
        <div role="alert">
        </div>
        `,
        `
        <div role="alert">
            <div aria-hidden="true">
                Hello world
            </div>
        </div>
        `
    );
};
ContentIsHidden.storyName = 'Content is hidden ❌';
ContentIsHidden.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    await userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();
};

export const ContentIsPartiallyHidden: StoryFn = () => {
    return createMountToggle(
        `
        <div role="alert">
        </div>
        `,
        `
        <div role="alert">
            <span>
                Hello
            </span>
            <span aria-hidden="true">
                world
            </span>
        </div>
        `
    );
};
ContentIsPartiallyHidden.storyName = 'Content is partially hidden ⚠️';
ContentIsPartiallyHidden.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    await userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();
    expect('Hello').toBeAnnounced('assertive');
};

export const PartOfContentChanges: StoryFn = () => {
    return createMountToggle(
        `
        <div role="alert">
            <span>
                Hello
            </span>
        </div>
        `,
        `
        <div role="alert">
            <span>
                Hello
            </span>
            <span>
                world
            </span>
        </div>
        `
    );
};
PartOfContentChanges.storyName = 'Part of content changes ✅';
PartOfContentChanges.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    await userEvent.click(button);
    expect('Hello world').toBeAnnounced('assertive');
};

export const AriaHiddenChanges: StoryFn = () => {
    return createMountToggle(
        `
        <div role="alert">
            <span aria-hidden="true">
                Hello world
            </span>
        </div>
        `,
        `
        <div role="alert">
            <span>
                Hello world
            </span>
        </div>
        `
    );
};
AriaHiddenChanges.storyName = 'aria-hidden changes ✅';
AriaHiddenChanges.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    await userEvent.click(button);
    expect('Hello world').toBeAnnounced('assertive');
};
