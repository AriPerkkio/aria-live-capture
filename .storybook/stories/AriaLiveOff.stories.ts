import { addStoryName, createMountToggle } from '../utils';

export default {
    title: 'Aria-live/aria-live="off"',
};

export function WithTextContent() {
    return createMountToggle(
        `
        <div aria-live="off">
        </div>
        `,
        `
        <div aria-live="off">
            Hello world
        </div>
        `
    );
}
addStoryName(WithTextContent, 'FAIL');

export function WrapsLiveRegion() {
    return createMountToggle(
        `
        <div aria-live="off">
            <div aria-live="polite">
            </div>
        </div>
        `,
        `
        <div aria-live="off">
            <div aria-live="polite">
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
        <div aria-live="polite">
            <div aria-live="off">
            </div>
        </div>
        `,
        `
        <div aria-live="polite">
            <div aria-live="off">
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
        <div aria-live="polite">
            <div aria-live="off">
            </div>
        </div>
        `,
        `
        <div aria-live="polite">
            <div aria-live="off">
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
