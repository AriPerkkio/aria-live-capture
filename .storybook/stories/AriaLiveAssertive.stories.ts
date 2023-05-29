import type { Meta, StoryFn } from '@storybook/html';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import '../expect-extend';
import { createMountToggle } from '../utils';

export default {
    title: 'Aria-live/aria-live="assertive"',
} as Meta;

export const LiveRegionAvailableBeforeContent: StoryFn = () => {
    return createMountToggle(
        `
        <div aria-live="assertive">
        </div>
        `,
        `
        <div aria-live="assertive">
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

    userEvent.click(button);
    expect('Hello world').toBeAnnounced('assertive');
};

export const LiveRegionUnavailableBeforeContent: StoryFn = () => {
    return createMountToggle(
        `
        <div>
        </div>
        `,
        `
        <div aria-live="assertive">
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

    userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();
};

export const AnchestorIsHidden: StoryFn = () => {
    return createMountToggle(
        `
        <div aria-hidden="true">
            <div aria-live="assertive">
            </div>
        </div>
        `,
        `
        <div aria-hidden="true">
            <div aria-live="assertive">
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

    userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();
};

export const LiveRegionIsHidden: StoryFn = () => {
    return createMountToggle(
        `
        <div aria-hidden="true" aria-live="assertive">
        </div>
        `,
        `
        <div aria-hidden="true" aria-live="assertive">
            Hello world
        </div>
        `
    );
};
LiveRegionIsHidden.storyName = 'Live region is hidden ❌';
LiveRegionIsHidden.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();
};

export const ContentIsHidden: StoryFn = () => {
    return createMountToggle(
        `
        <div aria-live="assertive">
        </div>
        `,
        `
        <div aria-live="assertive">
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

    userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();
};

export const ContentIsPartiallyHidden: StoryFn = () => {
    return createMountToggle(
        `
        <div aria-live="assertive">
        </div>
        `,
        `
        <div aria-live="assertive">
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
    expect('Hello').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello').toBeAnnounced('assertive');
    expect('world').not.toBeAnnounced();
    expect('Hello world').not.toBeAnnounced();
};

export const PartOfContentChanges: StoryFn = () => {
    return createMountToggle(
        `
        <div aria-live="assertive">
            <span>
                Hello
            </span>
        </div>
        `,
        `
        <div aria-live="assertive">
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

    userEvent.click(button);
    expect('Hello world').toBeAnnounced('assertive');
};
