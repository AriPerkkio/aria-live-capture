import { addStoryName, createMountToggle } from '../utils';

export default {
    title: 'Aria-live/aria-live="assertive"',
};

addStoryName(LiveRegionAvailableBeforeContent, 'PASS');
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

addStoryName(LiveRegionUnavailableBeforeContent, 'FAIL');
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

addStoryName(AnchestorIsHidden, 'FAIL');
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

addStoryName(LiveRegionIsHidden, 'FAIL');
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

addStoryName(ContentIsHidden, 'FAIL');
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

addStoryName(ContentIsPartiallyHidden, 'PARTIAL');
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

addStoryName(PartOfContentChanges, 'PASS');
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
