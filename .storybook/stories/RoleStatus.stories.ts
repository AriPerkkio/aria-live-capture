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
