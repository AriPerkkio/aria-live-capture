import { addStoryName, createMountToggle } from '../utils';

export default {
    title: 'Role/role="status"',
};

export function LiveRegionAvailableBeforeContent() {
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
}
addStoryName(LiveRegionAvailableBeforeContent, 'PASS');

export function LiveRegionUnavailableBeforeContent() {
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
}
addStoryName(LiveRegionUnavailableBeforeContent, 'FAIL');

export function AnchestorIsHidden() {
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
}
addStoryName(AnchestorIsHidden, 'FAIL');

export function LiveRegionIsHidden() {
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
}
addStoryName(LiveRegionIsHidden, 'FAIL');

export function ContentIsHidden() {
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
}
addStoryName(ContentIsHidden, 'FAIL');

export function ContentIsPartiallyHidden() {
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
}
addStoryName(ContentIsPartiallyHidden, 'PARTIAL');

export function PartOfContentChanges() {
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
}
addStoryName(PartOfContentChanges, 'PASS');

export function AriaHiddenChanges() {
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
}
addStoryName(AriaHiddenChanges, 'PASS');
