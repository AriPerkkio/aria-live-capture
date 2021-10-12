import { addStoryName, createMountToggle } from '../utils';

export default {
    title: 'Aria-live/aria-live="polite"',
};

addStoryName(LiveRegionAvailableBeforeContent, 'PASS');
export function LiveRegionAvailableBeforeContent() {
    return createMountToggle(
        `
        <div aria-live="polite">
        </div>
        `,
        `
        <div aria-live="polite">
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
        <div aria-live="polite">
            Hello world
        </div>
        `
    );
}
