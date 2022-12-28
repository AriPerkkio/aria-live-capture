import type { Meta, Story } from '@storybook/html';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import '../expect-extend';
import { addStoryName, createMountToggle } from '../utils';

export default {
    title: 'Aria-live/aria-live="assertive"',
} as Meta;

export const LiveRegionAvailableBeforeContent: Story = () => {
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
addStoryName(LiveRegionAvailableBeforeContent, 'PASS');
LiveRegionAvailableBeforeContent.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').toBeAnnounced('assertive');
};

export const LiveRegionUnavailableBeforeContent: Story = () => {
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
addStoryName(LiveRegionUnavailableBeforeContent, 'FAIL');
LiveRegionUnavailableBeforeContent.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();
};

export const AnchestorIsHidden: Story = () => {
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
addStoryName(AnchestorIsHidden, 'FAIL');
AnchestorIsHidden.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();
};

export const LiveRegionIsHidden: Story = () => {
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
addStoryName(LiveRegionIsHidden, 'FAIL');
LiveRegionIsHidden.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();
};

export const ContentIsHidden: Story = () => {
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
addStoryName(ContentIsHidden, 'FAIL');
ContentIsHidden.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();
};

export const ContentIsPartiallyHidden: Story = () => {
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
addStoryName(ContentIsPartiallyHidden, 'PARTIAL');
ContentIsPartiallyHidden.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello').toBeAnnounced('assertive');
    expect('world').not.toBeAnnounced();
    expect('Hello world').not.toBeAnnounced();
};

export const PartOfContentChanges: Story = () => {
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
addStoryName(PartOfContentChanges, 'PASS');
PartOfContentChanges.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').toBeAnnounced('assertive');
};
