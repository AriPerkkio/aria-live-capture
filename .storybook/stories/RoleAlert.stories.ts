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
