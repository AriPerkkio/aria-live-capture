import { createMountToggle } from '../utils';

export default {
    title: 'Unsupported/aria-atomic',
};

export function True() {
    return createMountToggle(
        `
        <div aria-live="polite" aria-atomic="true">
            <span>Hello</span>
        </div>
        `,
        `
        <div aria-live="polite" aria-atomic="true">
            <span>Hello</span>
            <span>world</span>
        </div>
        `
    );
}
True.storyName = 'true';

export function False() {
    return createMountToggle(
        `
        <div aria-live="polite" aria-atomic="false">
            <span>Hello</span>
        </div>
        `,
        `
        <div aria-live="polite" aria-atomic="false">
            <span>Hello</span>
            <span>world</span>
        </div>
        `
    );
}
False.storyName = 'false';
