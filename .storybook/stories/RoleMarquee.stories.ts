import { addStoryName, createMountToggle } from '../utils';

export default {
    title: 'Role/role="marquee"',
};

addStoryName(WithTextContent, 'FAIL');
export function WithTextContent() {
    return createMountToggle(
        `
        <div role="marquee">
        </div>
        `,
        `
        <div role="marquee">
            Hello world
        </div>
        `
    );
}

addStoryName(WrapsLiveRegion, 'PASS');
export function WrapsLiveRegion() {
    return createMountToggle(
        `
        <div role="marquee">
            <div role="status">
            </div>
        </div>
        `,
        `
        <div role="marquee">
            <div role="status">
                Hello world
            </div>
        </div>
        `
    );
}

addStoryName(WrappedInLiveRegion, 'FAIL');
export function WrappedInLiveRegion() {
    return createMountToggle(
        `
        <div role="status">
            <div role="marquee">
            </div>
        </div>
        `,
        `
        <div role="status">
            <div role="marquee">
                Hello world
            </div>
        </div>
        `
    );
}

addStoryName(SiblingIsVisible, 'PARTIAL');
export function SiblingIsVisible() {
    return createMountToggle(
        `
        <div role="status">
            <div role="marquee">
            </div>
        </div>
        `,
        `
        <div role="status">
            <div role="marquee">
                Hello
            </div>
            <div>
                world
            </div>
        </div>
        `
    );
}
