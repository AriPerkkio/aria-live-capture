import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

import CaptureAnnouncements from '../src';
import { __PrivateUnstableAPI } from '../src/capture-announcements';
import { configure, getConfig } from '../src/config';
import {
    appendToRoot,
    POLITE_CASES,
    ASSERTIVE_CASES,
    OFF_CASES,
} from './utils';

const { liveRegions } = __PrivateUnstableAPI;

describe.each(POLITE_CASES)('$testName', ({ name, value, tag }) => {
    let element: HTMLElement;
    let cleanup: undefined | ReturnType<typeof CaptureAnnouncements>;
    const onCapture = vi.fn();

    afterEach(() => {
        cleanup?.();
        onCapture.mockReset();
    });

    beforeEach(() => {
        cleanup = CaptureAnnouncements({ onCapture });

        const liveRegion = document.createElement(tag || 'div');
        if (name && value) {
            liveRegion.setAttribute(name, value);
        }

        element = liveRegion;
    });

    test('should not announce when initially rendered with content', () => {
        element.textContent = 'Hello world';
        appendToRoot(element);

        expect(onCapture).not.toHaveBeenCalled();
    });

    test('should announce when dynamically rendered into live region', () => {
        appendToRoot(element);

        element.textContent = 'Hello world';

        expect(onCapture).toHaveBeenCalledWith('Hello world', 'polite');
    });

    test('should announce when content changes', () => {
        appendToRoot(element);

        element.textContent = 'First';
        element.textContent = 'Second';

        expect(onCapture).toHaveBeenCalledWith('First', 'polite');
        expect(onCapture).toHaveBeenCalledWith('Second', 'polite');
    });

    test('should not announce when role is set after render', () => {
        const liveRegion = document.createElement(tag || 'div');
        liveRegion.textContent = 'Hello world';
        appendToRoot(liveRegion);

        if (name && value) {
            liveRegion.setAttribute(name, value);
        }

        expect(onCapture).not.toHaveBeenCalled();
    });

    test('should announce when role is set after render and content is updated', () => {
        const liveRegion = document.createElement(tag || 'div');
        liveRegion.textContent = 'First';
        appendToRoot(liveRegion);

        if (name && value) {
            liveRegion.setAttribute(name, value);
        }
        liveRegion.textContent = 'Second';

        expect(onCapture).not.toHaveBeenCalledWith('First', expect.anything());
        expect(onCapture).toHaveBeenCalledWith('Second', 'polite');
    });

    test('should announce when text node is appended into existing live region', () => {
        appendToRoot(element);

        element.appendChild(document.createTextNode('Hello world'));

        expect(onCapture).toHaveBeenCalledWith('Hello world', 'polite');
    });

    test('should not announce when live region is hidden', () => {
        element.setAttribute('aria-hidden', 'true');
        appendToRoot(element);

        element.textContent = 'Hello world';

        expect(onCapture).not.toHaveBeenCalled();
    });

    test('should not announce when content is hidden', () => {
        appendToRoot(element);

        const child = document.createElement('div');
        child.textContent = 'Hello world';
        child.setAttribute('aria-hidden', 'true');

        element.appendChild(child);

        expect(onCapture).not.toHaveBeenCalled();
    });

    test('should announce when hidden content appears by removeAttribute', () => {
        appendToRoot(element);

        const child = document.createElement('div');
        child.textContent = 'Hello world';
        child.setAttribute('aria-hidden', 'true');
        element.appendChild(child);

        child.removeAttribute('aria-hidden');

        expect(onCapture).toHaveBeenCalledWith('Hello world', 'polite');
    });

    test('should announce when hidden content appears by setAttribute', () => {
        appendToRoot(element);

        const child = document.createElement('div');
        child.textContent = 'Hello world';
        child.setAttribute('aria-hidden', 'true');
        element.appendChild(child);

        child.setAttribute('aria-hidden', 'false');

        expect(onCapture).toHaveBeenCalledWith('Hello world', 'polite');
    });

    test('should not announce when hidden live region appears', () => {
        element.setAttribute('aria-hidden', 'true');
        appendToRoot(element);

        element.textContent = 'Hello world';
        element.removeAttribute('aria-hidden');

        expect(onCapture).not.toHaveBeenCalled();
    });

    test('should announce whole content when a single child changes', () => {
        appendToRoot(element);

        const first = document.createElement('div');
        first.textContent = 'Hello';
        element.appendChild(first);

        expect(onCapture).toHaveBeenCalledWith('Hello', 'polite');
        onCapture.mockClear();

        const second = document.createElement('div');
        element.appendChild(second);

        second.textContent = 'World';
        expect(onCapture).toHaveBeenCalledWith('Hello World', 'polite');
        onCapture.mockClear();

        element.removeChild(second);
        expect(onCapture).toHaveBeenCalledWith('Hello', 'polite');
    });
});

describe.each(ASSERTIVE_CASES)('$testName', ({ name, value }) => {
    let element: HTMLElement;
    let cleanup: undefined | ReturnType<typeof CaptureAnnouncements>;
    const onCapture = vi.fn();

    afterEach(() => {
        cleanup?.();
        onCapture.mockReset();
    });

    beforeEach(() => {
        cleanup = CaptureAnnouncements({ onCapture });

        const liveRegion = document.createElement('div');
        if (name && value) {
            liveRegion.setAttribute(name, value);
        }

        element = liveRegion;
    });

    if (name === 'role' && value === 'alert') {
        test('should announce when dynamically rendered with initial content', () => {
            element.textContent = 'Hello world';
            appendToRoot(element);

            expect(onCapture).toHaveBeenCalledWith('Hello world', 'assertive');
        });

        test('should announce when hidden live region appears', () => {
            element.setAttribute('aria-hidden', 'true');
            element.textContent = 'Hello world';
            appendToRoot(element);

            element.removeAttribute('aria-hidden');

            expect(onCapture).toHaveBeenCalledWith('Hello world', 'assertive');
        });
    } else {
        test('should not announce when dynamically rendered with initial content', () => {
            element.textContent = 'Hello world';
            appendToRoot(element);

            expect(onCapture).not.toHaveBeenCalled();
        });
    }

    test('should announce when dynamically rendered into live region', () => {
        appendToRoot(element);
        element.textContent = 'Hello world';

        expect(onCapture).toHaveBeenCalledWith('Hello world', 'assertive');
    });

    test('should announce when content changes', () => {
        appendToRoot(element);
        element.textContent = 'Message #1';
        element.textContent = 'Message #2';

        expect(onCapture).toHaveBeenCalledWith('Message #1', 'assertive');
        expect(onCapture).toHaveBeenCalledWith('Message #2', 'assertive');
    });

    test('should announce when role is set after render and content is updated', () => {
        const liveRegion = document.createElement('div');
        liveRegion.textContent = 'First';
        appendToRoot(liveRegion);

        if (name && value) {
            liveRegion.setAttribute(name, value);
        }
        liveRegion.textContent = 'Second';

        expect(onCapture).toHaveBeenCalledWith('Second', 'assertive');
    });

    test('should announce when content is added with `insertBefore`', async () => {
        appendToRoot(element);

        const child = document.createElement('div');
        const sibling = document.createElement('div');
        element.appendChild(child);

        sibling.textContent = 'Hello world';
        element.insertBefore(sibling, child);

        expect(onCapture).toHaveBeenCalledWith('Hello world', 'assertive');
    });

    test('should announce when content is added with `replaceChild`', async () => {
        appendToRoot(element);

        const oldChild = document.createElement('div');
        const newChild = document.createElement('div');
        element.appendChild(oldChild);

        newChild.textContent = 'Hello world';
        element.replaceChild(newChild, oldChild);

        expect(onCapture).toHaveBeenCalledWith('Hello world', 'assertive');
    });

    test('should announce when content is added with `insertAdjacentElement`', async () => {
        appendToRoot(element);

        const child = document.createElement('div');
        const sibling = document.createElement('div');
        element.appendChild(child);

        sibling.textContent = 'Hello world';
        child.insertAdjacentElement('afterbegin', sibling);

        expect(onCapture).toHaveBeenCalledWith('Hello world', 'assertive');
    });

    test('should announce when content is added with `insertAdjacentText`', async () => {
        const child = document.createElement('div');
        element.appendChild(child);
        appendToRoot(element);

        child.insertAdjacentText('beforebegin', 'Hello world');

        expect(onCapture).toHaveBeenCalledWith('Hello world', 'assertive');
    });

    test('should announce when content is added with `insertAdjacentHTML`', async () => {
        const child = document.createElement('div');
        element.appendChild(child);
        appendToRoot(element);

        child.insertAdjacentHTML('beforebegin', '<div>Hello world</div>');

        expect(onCapture).toHaveBeenCalledWith('Hello world', 'assertive');
    });

    test('should announce when content is added with `before`', async () => {
        appendToRoot(element);

        const last = document.createElement('div');
        last.textContent = 'world';
        element.appendChild(last);

        const first = document.createElement('div');
        first.textContent = 'Hello';
        last.before(first);

        expect(onCapture).toHaveBeenCalledWith('Hello world', 'assertive');
    });

    test('should announce when content is added with `append`', async () => {
        appendToRoot(element);

        const child = document.createElement('div');
        child.textContent = 'Hello world';

        element.append(child);

        expect(onCapture).toHaveBeenCalledWith('Hello world', 'assertive');
    });

    test('should announce when content is added with `prepend`', async () => {
        appendToRoot(element);

        const child = document.createElement('div');
        child.textContent = 'Hello world';

        element.prepend(child);

        expect(onCapture).toHaveBeenCalledWith('Hello world', 'assertive');
    });

    test('should announce when content is added with `replaceChildren`', async () => {
        appendToRoot(element);

        element.appendChild(document.createElement('div'));

        const child = document.createElement('div');
        child.textContent = 'Hello world';

        element.replaceChildren(child);

        expect(onCapture).toHaveBeenCalledWith('Hello world', 'assertive');
    });

    test('should not announce when live region is hidden', () => {
        element.setAttribute('aria-hidden', 'true');
        element.textContent = 'Hello world';
        appendToRoot(element);

        expect(onCapture).not.toHaveBeenCalled();
    });

    test('should not announce when content is hidden', () => {
        appendToRoot(element);

        const child = document.createElement('div');
        child.setAttribute('aria-hidden', 'true');
        child.textContent = 'Hello world';

        element.appendChild(child);

        expect(onCapture).not.toHaveBeenCalled();
    });

    test('should announce when hidden content appears by removeAttribute', () => {
        appendToRoot(element);

        const child = document.createElement('div');
        child.textContent = 'Hello world';
        child.setAttribute('aria-hidden', 'true');
        element.appendChild(child);

        child.removeAttribute('aria-hidden');

        expect(onCapture).toHaveBeenCalledWith('Hello world', 'assertive');
    });

    test('should announce when hidden content appears by setAttribute', () => {
        appendToRoot(element);

        const child = document.createElement('div');
        child.textContent = 'Hello world';
        child.setAttribute('aria-hidden', 'true');
        element.appendChild(child);

        child.setAttribute('aria-hidden', 'false');

        expect(onCapture).toHaveBeenCalledWith('Hello world', 'assertive');
    });
});

describe.each(OFF_CASES)('$testName', ({ name, value }) => {
    let element: HTMLElement;
    let cleanup: undefined | ReturnType<typeof CaptureAnnouncements>;
    const onCapture = vi.fn();

    afterEach(() => {
        cleanup?.();
        onCapture.mockReset();
    });

    beforeEach(() => {
        cleanup = CaptureAnnouncements({ onCapture });

        element = document.createElement('div');
        element.setAttribute(name!, value!);
    });

    test('should not announce when dynamically rendered into live region', () => {
        appendToRoot(element);

        element.textContent = 'Hello world';

        expect(onCapture).not.toHaveBeenCalled();
    });

    test('should not announce when wrapped inside live region', () => {
        const parent = document.createElement('div');
        parent.setAttribute('role', 'alert');

        appendToRoot(parent);

        element.textContent = 'Hello world';
        parent.appendChild(element);

        expect(onCapture).not.toHaveBeenCalled();
    });

    test('should announce when wraps a live region', () => {
        appendToRoot(element);

        const child = document.createElement('div');
        child.setAttribute('role', 'alert');
        element.appendChild(child);

        child.textContent = 'Hello world';

        expect(onCapture).toHaveBeenCalledWith('Hello world', 'assertive');
    });
});

describe('common', () => {
    let element: HTMLElement;
    let cleanup: undefined | ReturnType<typeof CaptureAnnouncements>;
    const onCapture = vi.fn();

    afterEach(() => {
        cleanup?.();
        onCapture.mockReset();
    });

    beforeEach(() => {
        cleanup = CaptureAnnouncements({ onCapture });

        element = document.createElement('div');
    });

    test('onCapture should trim white-space', () => {
        element.setAttribute('role', 'status');
        appendToRoot(element);

        const first = document.createElement('div');
        first.textContent = '    First   message here';
        const second = document.createElement('div');
        second.textContent = '    Second   message   here ';

        const child = document.createElement('div');
        child.appendChild(first);
        child.appendChild(second);
        element.appendChild(child);

        expect(onCapture).toHaveBeenCalledWith(
            'First message here Second message here',
            'polite'
        );
    });

    test('onCapture should not report when textContent is empty', () => {
        element.setAttribute('role', 'status');
        appendToRoot(element);

        element.textContent = ' ';
        element.textContent = '    ';

        element.textContent = `
${' '.repeat(32)}
${' '.repeat(32)}
${' '.repeat(32)}
        `;

        expect(onCapture).not.toHaveBeenCalled();
    });
});

describe('element tracking', () => {
    let element: HTMLElement;
    let cleanup: undefined | ReturnType<typeof CaptureAnnouncements>;

    afterEach(() => {
        cleanup?.();
    });

    beforeEach(() => {
        cleanup = CaptureAnnouncements({ onCapture: vi.fn() });
        element = document.createElement('div');
    });

    test('element is removed from tracked elements when aria-live is removed', () => {
        element.setAttribute('aria-live', 'polite');
        appendToRoot(element);
        element.textContent = 'Hello world';

        expect(liveRegions.size).toBe(1);
        expect(liveRegions.has(element)).toBe(true);

        element.removeAttribute('aria-live');

        expect(liveRegions.size).toBe(0);
        expect(liveRegions.has(element)).toBe(false);
    });

    test('element is removed from tracked elements when role is removed', () => {
        element.setAttribute('role', 'status');
        appendToRoot(element);
        element.textContent = 'Hello world';

        expect(liveRegions.size).toBe(1);
        expect(liveRegions.has(element)).toBe(true);

        element.removeAttribute('role');

        expect(liveRegions.size).toBe(0);
        expect(liveRegions.has(element)).toBe(false);
    });

    test('element is removed from tracked elements when unmounted', () => {
        element.setAttribute('role', 'status');
        appendToRoot(element);
        element.textContent = 'Hello world';

        expect(liveRegions.size).toBe(1);
        expect(liveRegions.has(element)).toBe(true);

        element.parentElement!.removeChild(element);

        expect(liveRegions.size).toBe(0);
        expect(liveRegions.has(element)).toBe(false);
    });

    test('element is removed from tracked elements when ancestor is unmounted', () => {
        const child = document.createElement('div');
        child.setAttribute('role', 'status');
        element.appendChild(child);

        appendToRoot(element);
        child.textContent = 'Hello world';

        expect(liveRegions.size).toBe(1);
        expect(liveRegions.has(child)).toBe(true);

        element.parentElement!.removeChild(element);

        expect(liveRegions.size).toBe(0);
        expect(liveRegions.has(element)).toBe(false);
    });

    test('element is not removed from tracked nodes when unexisting role or aria-live is removed', () => {
        element.setAttribute('aria-live', 'polite');
        appendToRoot(element);
        element.textContent = 'Hello world';

        expect(liveRegions.size).toBe(1);
        expect(liveRegions.has(element)).toBe(true);

        // Element has no role set. This should not remove it from tracked nodes.
        element.removeAttribute('role');

        expect(liveRegions.size).toBe(1);
        expect(liveRegions.has(element)).toBe(true);
    });

    test.todo(
        'element is not removed from tracked nodes when if both role and aria-live exist and one is removed'
    );

    test('hidden elements are not tracked', () => {
        element.setAttribute('aria-live', 'polite');
        element.setAttribute('aria-hidden', 'true');
        appendToRoot(element);

        expect(liveRegions.size).toBe(0);
        expect(liveRegions.has(element)).toBe(false);
    });

    test('existing element is tracked once it becomes visibile', () => {
        element.setAttribute('aria-live', 'polite');
        element.setAttribute('aria-hidden', 'true');
        appendToRoot(element);

        expect(liveRegions.size).toBe(0);
        expect(liveRegions.has(element)).toBe(false);

        element.removeAttribute('aria-hidden');

        expect(liveRegions.size).toBe(1);
        expect(liveRegions.has(element)).toBe(true);
    });

    test('element in shadow dom is tracked', () => {
        configure({ includeShadowDom: true });

        const region = document.createElement('div');
        region.setAttribute('aria-live', 'polite');

        element.attachShadow({ mode: 'open' });
        element.shadowRoot!.appendChild(region);
        appendToRoot(element);

        expect(liveRegions.size).toBe(1);
        expect(liveRegions.has(region)).toBe(true);
    });

    test('does not track shadow doms when config.includeShadowDom is false', () => {
        configure({ includeShadowDom: false });

        const region = document.createElement('div');
        region.setAttribute('aria-live', 'polite');

        element.attachShadow({ mode: 'open' });
        element.shadowRoot!.appendChild(region);
        appendToRoot(element);

        expect(liveRegions.size).toBe(0);
        expect(liveRegions.has(region)).toBe(false);
    });

    test('existing elements are tracked by initialization', () => {
        cleanup?.();

        element.setAttribute('aria-live', 'polite');
        appendToRoot(element);

        expect(liveRegions.size).toBe(0);
        cleanup = CaptureAnnouncements({ onCapture: vi.fn() });

        expect(liveRegions.size).toBe(1);
        expect(liveRegions.has(element)).toBe(true);
    });
});

describe('config', () => {
    let cleanup: undefined | ReturnType<typeof CaptureAnnouncements>;
    const onCapture = vi.fn();

    afterEach(() => {
        cleanup?.();
    });

    test('resolves includeShadowDom when not configured', () => {
        cleanup = CaptureAnnouncements({ onCapture });

        expect(getConfig().includeShadowDom).toBe(false);
    });

    test('resolves includeShadowDom when configured true', () => {
        cleanup = CaptureAnnouncements({ onCapture, includeShadowDom: true });

        expect(getConfig().includeShadowDom).toBe(true);
    });

    test('resolves includeShadowDom when configured false', () => {
        cleanup = CaptureAnnouncements({ onCapture, includeShadowDom: false });

        expect(getConfig().includeShadowDom).toBe(false);
    });
});
