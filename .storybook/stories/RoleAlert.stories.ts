import { addStoryName, createMountToggle } from '../utils';

export default {
    title: 'Role/role="alert"',
};

addStoryName(LiveRegionAvailableBeforeContent, 'PASS');
export function LiveRegionAvailableBeforeContent() {
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
}

addStoryName(LiveRegionUnavailableBeforeContent, 'PASS');
export function LiveRegionUnavailableBeforeContent() {
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
}

addStoryName(AnchestorIsHidden, 'FAIL');
export function AnchestorIsHidden() {
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
}

addStoryName(LiveRegionIsHidden, 'FAIL');
export function LiveRegionIsHidden() {
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
}

addStoryName(ContentIsHidden, 'FAIL');
export function ContentIsHidden() {
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
}

addStoryName(ContentIsPartiallyHidden, 'PARTIAL');
export function ContentIsPartiallyHidden() {
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
}

addStoryName(PartOfContentChanges, 'PASS');
export function PartOfContentChanges() {
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
}

addStoryName(AriaHiddenChanges, 'PASS');
export function AriaHiddenChanges() {
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
}
