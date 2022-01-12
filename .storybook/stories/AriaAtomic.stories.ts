import { createMountToggle } from '../utils';

export default {
    title: 'aria-atomic (unsupported)',
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
