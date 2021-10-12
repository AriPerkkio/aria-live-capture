import { addStoryName, createMountToggle } from '../utils';

export default {
    title: 'Elements/<output>',
};

addStoryName(LiveRegionAvailableBeforeContent, 'PASS');
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

addStoryName(LiveRegionNotAvailableBeforeContent, 'FAIL');
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
