import { createMountToggle } from '../utils';

export default {
    title: 'aria-relevant (unsupported)',
};

export function Additions() {
    return createMountToggle(
        `
        <ul aria-live="polite" aria-relevant="additions">
            <li>First</li>
        </ul>
        `,
        `
        <ul aria-live="polite" aria-relevant="additions">
            <li>First</li>
            <li>Second</li>
        </ul>
        `
    );
}

export function Removals() {
    return createMountToggle(
        `
        <ul aria-live="polite" aria-relevant="removals">
            <li>First</li>
            <li>Second</li>
        </ul>
        `,
        `
        <ul aria-live="polite" aria-relevant="removals">
            <li>First</li>
        </ul>
        `
    );
}

export function Text() {
    return createMountToggle(
        `
        <div aria-live="polite" aria-relevant="text">
            First
        </div>
        `,
        `
        <div aria-live="polite" aria-relevant="text">
            First, Second
        </div>
        `
    );
}

export function All() {
    return createMountToggle(
        `
        <ul aria-live="polite" aria-relevant="all">
            <li>First</li>
            <li>Second</li>

        </ul>
        `,
        `
        <ul aria-live="polite" aria-relevant="all">
            <li>First Hello world</li>

            <li>Third</li>
        </ul>
        `
    );
}
