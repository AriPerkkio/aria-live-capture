import { addStoryName, createMountToggle } from '../utils';

export default {
    title: 'Aria-live/aria-live="assertive"',
};

export function LiveRegionAvailableBeforeContent() {
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
}
addStoryName(LiveRegionAvailableBeforeContent, 'PASS');

export function LiveRegionUnavailableBeforeContent() {
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
}
addStoryName(LiveRegionUnavailableBeforeContent, 'FAIL');

export function AnchestorIsHidden() {
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
}
addStoryName(AnchestorIsHidden, 'FAIL');

export function LiveRegionIsHidden() {
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
}
addStoryName(LiveRegionIsHidden, 'FAIL');

export function ContentIsHidden() {
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
}
addStoryName(ContentIsHidden, 'FAIL');

export function ContentIsPartiallyHidden() {
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
}
addStoryName(ContentIsPartiallyHidden, 'PARTIAL');

export function PartOfContentChanges() {
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
}
addStoryName(PartOfContentChanges, 'PASS');
