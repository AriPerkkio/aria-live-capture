import { addStoryName, createMountToggle } from '../utils';

export default {
    title: 'Role/role="log"',
};

addStoryName(LiveRegionAvailableBeforeContent, 'PASS');
export function LiveRegionAvailableBeforeContent() {
    return createMountToggle(
        `
        <div role="log">
        </div>
        `,
        `
        <div role="log">
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
        <div role="log">
            Hello world
        </div>
        `
    );
}
