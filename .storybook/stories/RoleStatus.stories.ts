import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import type { Story, Meta } from '@storybook/html';

import '../expect-extend';
import { addStoryName, createMountToggle } from '../utils';

export default {
    title: 'Role/role="status"',
} as Meta;

export const LiveRegionAvailableBeforeContent: Story = () => {
    return createMountToggle(
        `
        <div role="status">
        </div>
        `,
        `
        <div role="status">
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
        <div role="status">
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
            <div role="status">
            </div>
        </div>
        `,
        `
        <div aria-hidden="true">
            <div role="status">
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
        <div aria-hidden="true" role="status">
        </div>
        `,
        `
        <div aria-hidden="true" role="status">
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
        <div role="status">
        </div>
        `,
        `
        <div role="status">
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
        <div role="status">
        </div>
        `,
        `
        <div role="status">
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
    expect('Hello').toBeAnnounced('polite');
    expect('world').not.toBeAnnounced();
    expect('Hello world').not.toBeAnnounced();
};

export const PartOfContentChanges: Story = () => {
    return createMountToggle(
        `
        <div role="status">
            <span>
                Hello
            </span>
        </div>
        `,
        `
        <div role="status">
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
    expect('Hello world').toBeAnnounced('polite');
};

export const AriaHiddenChanges: Story = () => {
    return createMountToggle(
        `
        <div role="status">
            <span aria-hidden="true">
                Hello world
            </span>
        </div>
        `,
        `
        <div role="status">
            <span>
                Hello world
            </span>
        </div>
        `
    );
};
addStoryName(AriaHiddenChanges, 'PASS');
AriaHiddenChanges.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').toBeAnnounced('polite');
};
