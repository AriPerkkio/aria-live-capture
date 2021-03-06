import { addStoryName, createMountToggle } from '../utils';

export default {
    title: 'Role/role="timer"',
};

export function WithTextContent() {
    return createMountToggle(
        `
        <div role="timer">
        </div>
        `,
        `
        <div role="timer">
            Hello world
        </div>
        `
    );
}
addStoryName(WithTextContent, 'FAIL');

export function WrapsLiveRegion() {
    return createMountToggle(
        `
        <div role="timer">
            <div role="status">
            </div>
        </div>
        `,
        `
        <div role="timer">
            <div role="status">
                Hello world
            </div>
        </div>
        `
    );
}
addStoryName(WrapsLiveRegion, 'PASS');

export function WrappedInLiveRegion() {
    return createMountToggle(
        `
        <div role="status">
            <div role="timer">
            </div>
        </div>
        `,
        `
        <div role="status">
            <div role="timer">
                Hello world
            </div>
        </div>
        `
    );
}
addStoryName(WrappedInLiveRegion, 'FAIL');

export function SiblingIsVisible() {
    return createMountToggle(
        `
        <div role="status">
            <div role="timer">
            </div>
        </div>
        `,
        `
        <div role="status">
            <div role="timer">
                Hello
            </div>
            <div>
                world
            </div>
        </div>
        `
    );
}
addStoryName(SiblingIsVisible, 'PARTIAL');
