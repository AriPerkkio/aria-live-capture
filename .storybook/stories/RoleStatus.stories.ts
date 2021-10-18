import { addStoryName, createMountToggle } from '../utils';

export default {
    title: 'Role/role="status"',
};

addStoryName(LiveRegionAvailableBeforeContent, 'PASS');
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

addStoryName(LiveRegionUnavailableBeforeContent, 'FAIL');
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

addStoryName(AnchestorIsHidden, 'FAIL');
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

addStoryName(LiveContainerIsHidden, 'FAIL');
export function LiveContainerIsHidden() {
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

addStoryName(ContentIsHidden, 'FAIL');
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

addStoryName(ContentIsPartiallyHidden, 'PARTIAL');
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

addStoryName(PartOfContentChanges, 'PASS');
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
