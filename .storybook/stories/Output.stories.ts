import { addStoryName, createMountToggle } from '../utils';

export default {
    title: 'Elements/<output>',
};

export function LiveRegionAvailableBeforeContent() {
    return createMountToggle(
        `
        <output>
        </output>
        `,
        `
        <output>
            Hello world
        </output>
        `
    );
}
addStoryName(LiveRegionAvailableBeforeContent, 'PASS');

export function LiveRegionNotAvailableBeforeContent() {
    return createMountToggle(
        `
        <div>
        </div>
        `,
        `
        <div>
            <output>
                Hello world
            </output>
        </div>
        `
    );
}
addStoryName(LiveRegionNotAvailableBeforeContent, 'FAIL');
