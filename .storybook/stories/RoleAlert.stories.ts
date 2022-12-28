import type { Story, Meta } from '@storybook/html';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import '../expect-extend';
import { addStoryName, createMountToggle } from '../utils';

export default {
    title: 'Role/role="alert"',
} as Meta;

export const LiveRegionAvailableBeforeContent: Story = () => {
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
        <div></div>
        `,
        `
        <div role="alert">
            Hello world
        </div>
        `
    );
};
addStoryName(LiveRegionUnavailableBeforeContent, 'PASS');
LiveRegionUnavailableBeforeContent.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').toBeAnnounced('assertive');
};

export const AnchestorIsHidden: Story = () => {
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
addStoryName(ContentIsPartiallyHidden, 'PARTIAL');
ContentIsPartiallyHidden.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').not.toBeAnnounced();
    expect('Hello').toBeAnnounced('assertive');
};

export const PartOfContentChanges: Story = () => {
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
addStoryName(PartOfContentChanges, 'PASS');
PartOfContentChanges.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').toBeAnnounced('assertive');
};

export const AriaHiddenChanges: Story = () => {
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
addStoryName(AriaHiddenChanges, 'PASS');
AriaHiddenChanges.play = async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole('button');
    expect('Hello world').not.toBeAnnounced();

    userEvent.click(button);
    expect('Hello world').toBeAnnounced('assertive');
};
