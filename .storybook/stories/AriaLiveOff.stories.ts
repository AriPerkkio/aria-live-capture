import { addStoryName, createMountToggle } from '../utils';

export default {
    title: 'Aria-live/aria-live="off"',
};

addStoryName(WithTextContent, 'FAIL');
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

addStoryName(WrapsLiveRegion, 'PASS');
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

addStoryName(WrappedInLiveRegion, 'FAIL');
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

addStoryName(SiblingIsVisible, 'PARTIAL');
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
