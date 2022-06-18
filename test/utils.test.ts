import { beforeEach, describe, expect, test } from 'vitest';

import { configure } from '../src/config';
import {
    getAllLiveRegions,
    getClosestElement,
    getClosestLiveRegion,
    getTextContent,
    isHidden,
    isInDOM,
} from '../src/utils';
import { appendToRoot } from './utils';

describe('getAllLiveRegions', () => {
    let root: HTMLElement;
    let element: HTMLElement;

    beforeEach(() => {
        element = document.createElement('div');
        root = document.getElementById('root')!;

        root.appendChild(element);
    });

    test.each(['status', 'log', 'alert'])(
        'returns element with [role="%s"]',
        role => {
            element.setAttribute('role', role);

            expect(getAllLiveRegions(root)).toContain(element);
        }
    );

    test.each(['polite', 'assertive'])(
        'returns element with [aria-live="%s"]',
        ariaLive => {
            element.setAttribute('aria-live', ariaLive);

            expect(getAllLiveRegions(root)).toContain(element);
        }
    );

    test('returns element with output', () => {
        const output = document.createElement('output');
        root.appendChild(output);

        expect(getAllLiveRegions(root)).toContain(output);
    });

    test('ignores element with aria-live="off"', () => {
        element.setAttribute('aria-live', 'off');

        expect(getAllLiveRegions(root)).not.toContain(element);
    });

    test.each(['marquee', 'timer'])(
        'ignores element with [role="%s"]',
        role => {
            element.setAttribute('role', role);

            expect(getAllLiveRegions(root)).not.toContain(element);
        }
    );

    test('returns live region from the shadow root', () => {
        configure({ includeShadowDom: true });

        const region = document.createElement('div');
        region.setAttribute('aria-live', 'polite');

        const shadowRoot = element.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(region);

        expect(getAllLiveRegions(root)).toContain(region);
    });

    test('returns live region from nested the shadow roots', () => {
        configure({ includeShadowDom: true });

        const shadowRoot = element.attachShadow({ mode: 'open' });

        const first = document.createElement('div');
        const second = document.createElement('div');
        const third = document.createElement('div');
        const fourth = document.createElement('div');

        shadowRoot.appendChild(first);
        first.attachShadow({ mode: 'open' }).appendChild(second);
        second.attachShadow({ mode: 'open' }).appendChild(third);
        third.attachShadow({ mode: 'open' }).appendChild(fourth);
        third.setAttribute('aria-live', 'polite');

        expect(getAllLiveRegions(root)).toContain(third);
    });

    test('does not traverse shadow dom when config.includeShadowDom is false', () => {
        configure({ includeShadowDom: false });

        const region = document.createElement('div');
        region.setAttribute('aria-live', 'polite');

        const shadowRoot = element.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(region);

        expect(getAllLiveRegions(root)).not.toContain(region);
        expect(getAllLiveRegions(root)).toHaveLength(0);
    });
});

describe('getClosestLiveRegion', () => {
    test('returns itself when live region', () => {
        const element = document.createElement('div');
        element.setAttribute('aria-live', 'polite');

        const parent = document.createElement('div');
        parent.setAttribute('aria-live', 'assertive');
        parent.appendChild(element);

        expect(getClosestLiveRegion(element)).toBe(element);
    });

    test('returns parent live region', () => {
        const parent = document.createElement('div');
        parent.setAttribute('aria-live', 'assertive');

        const element = document.createElement('div');
        parent.appendChild(element);

        expect(getClosestLiveRegion(element)).toBe(parent);
    });

    test('returns live region from parent shadow roots', () => {
        configure({ includeShadowDom: true });

        const region = document.createElement('div');
        region.setAttribute('aria-live', 'polite');

        const first = document.createElement('div');
        const second = document.createElement('div');
        const last = document.createElement('div');
        region.appendChild(first);
        first.attachShadow({ mode: 'open' }).appendChild(second);
        second.attachShadow({ mode: 'open' }).appendChild(last);

        expect(getClosestLiveRegion(last)).toBe(region);
    });

    test('does not traverse shadow dom when config.includeShadowDom is false', () => {
        configure({ includeShadowDom: false });

        const region = document.createElement('div');
        region.setAttribute('aria-live', 'polite');

        const parent = document.createElement('div');
        region.appendChild(parent);

        const element = document.createElement('div');
        parent.attachShadow({ mode: 'open' }).appendChild(element);

        expect(getClosestLiveRegion(element)).toBe(null);
    });
});

describe('getClosestElement', () => {
    test('returns itself when element', () => {
        const element = document.createElement('div');

        expect(getClosestElement(element)).toBe(element);
    });

    test('returns parent element of text node', () => {
        const element = document.createElement('div');
        const text = document.createTextNode('Hello world');
        element.appendChild(text);

        expect(getClosestElement(text)).toBe(element);
    });

    test('returns null when node has no parent', () => {
        const text = document.createTextNode('Hello world');

        expect(getClosestElement(text)).toBe(null);
    });

    test('returns null when node has parentless node as parent', () => {
        const parentNode = { parentNode: null } as Node;
        const text = { parentNode } as Node;

        expect(getClosestElement(text)).toBe(null);
    });

    test('returns parent of element inside shadow root', () => {
        configure({ includeShadowDom: true });

        const text = document.createTextNode('Hello world');
        const root = document.createElement('div');

        root.attachShadow({ mode: 'open' }).appendChild(text);

        expect(getClosestElement(text)).toBe(root);
    });

    test('does not traverse shadow dom when config.includeShadowDom is false', () => {
        configure({ includeShadowDom: false });

        const text = document.createTextNode('Hello world');
        const root = document.createElement('div');

        root.attachShadow({ mode: 'open' }).appendChild(text);

        expect(getClosestElement(text)).toBe(null);
    });
});

describe('getTextContent', () => {
    let root: HTMLElement;

    function html(text: string) {
        root.innerHTML = text;
    }

    beforeEach(() => {
        root = document.getElementById('root')!;
    });

    test('returns text content', () => {
        html(`
            <div>
                Hello world
            </div>
        `);

        expect(getTextContent(root)).toBe('Hello world');
    });

    test('concatenates text contents', () => {
        html(`
            <div>
                Hello
            </div>
            <div>
                world
            </div>

            something
        `);

        expect(getTextContent(root)).toBe('Hello world something');
    });

    test('ignores hidden elements', () => {
        html(`
            <div aria-hidden="true">
                Hello world
            </div>
        `);

        expect(getTextContent(root)).toBe(null);
    });

    test('ignores direct nested hidden elements', () => {
        html(`
            <div>
                Hello
                <div aria-hidden="true">
                    world
                </div>
            </div>
        `);

        expect(getTextContent(root)).toBe('Hello');
    });

    test('ignores deeply nested hidden elements', () => {
        html(`
            <div>
                Hello
                <div>
                    <div>
                        <div aria-hidden="true">
                            world
                        </div>
                        <div>
                            other
                        </div>
                    </div>
                </div>
            </div>
        `);

        expect(getTextContent(root)).toBe('Hello other');
    });

    test('detects visibility from parents', () => {
        html(`
            <div aria-hidden="true">
                <div>
                    <div id="temp">
                        Hello world
                    </div>
                </div>
            </div>
        `);

        expect(getTextContent(document.getElementById('temp'))).toBe(null);
    });

    test('returns text content from inside shadow dom', () => {
        configure({ includeShadowDom: true });

        html(`
            <div>
                <div id="host"></div>
            </div>
        `);

        const host = document.getElementById('host')!;
        const shadowRoot = host.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        wrapper.appendChild(document.createTextNode('Hello world'));
        shadowRoot.appendChild(wrapper);

        expect(getTextContent(root)).toBe('Hello world');
    });

    test('returns text content from wrapped shadow dom', () => {
        configure({ includeShadowDom: true });

        html(`
            <div>
                <div id="host"></div>
            </div>
        `);

        const shadowRoot = document
            .getElementById('host')!
            .attachShadow({ mode: 'open' });

        shadowRoot.appendChild(document.createTextNode('Hello world'));

        expect(getTextContent(root)).toBe('Hello world');
    });

    test('does not traverse shadow dom when config.includeShadowDom is false', () => {
        configure({ includeShadowDom: false });

        html(`
            <div>
                <div id="host"></div>
            </div>
        `);

        const host = document.getElementById('host')!;
        const shadowRoot = host.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        wrapper.appendChild(document.createTextNode('Hello world'));
        shadowRoot.appendChild(wrapper);

        expect(getTextContent(root)).toBe(null);
    });
});

describe('isHidden', () => {
    test('node without parent is hidden', () => {
        const text = document.createTextNode('Hello world');

        expect(isHidden(text)).toBe(true);
    });

    test('element with aria-hidden="true" is hidden', () => {
        const element = document.createElement('div');
        element.setAttribute('aria-hidden', 'true');

        expect(isHidden(element)).toBe(true);
    });

    test('element with aria-hidden="false" is visible', () => {
        const element = document.createElement('div');
        element.setAttribute('aria-hidden', 'false');

        expect(isHidden(element)).toBe(false);
    });

    test('element with aria-live="off" is hidden', () => {
        const element = document.createElement('div');
        element.setAttribute('aria-live', 'off');

        expect(isHidden(element)).toBe(true);
    });

    test('element with aria-live="polite" is visible', () => {
        const element = document.createElement('div');
        element.setAttribute('aria-live', 'polite');

        expect(isHidden(element)).toBe(false);
    });

    test('element with aria-live="assertive" is visible', () => {
        const element = document.createElement('div');
        element.setAttribute('aria-live', 'assertive');

        expect(isHidden(element)).toBe(false);
    });

    test('element with role="marquee" is hidden', () => {
        const element = document.createElement('div');
        element.setAttribute('role', 'marquee');

        expect(isHidden(element)).toBe(true);
    });

    test('element with role="timer" is hidden', () => {
        const element = document.createElement('div');
        element.setAttribute('role', 'timer');

        expect(isHidden(element)).toBe(true);
    });

    test('element with role="status" is visible', () => {
        const element = document.createElement('div');
        element.setAttribute('role', 'status');

        expect(isHidden(element)).toBe(false);
    });

    test('element having parent with aria-hidden="true" is hidden', () => {
        const element = document.createElement('div');
        const parent = document.createElement('div');
        parent.setAttribute('aria-hidden', 'true');
        parent.appendChild(element);

        expect(isHidden(element)).toBe(true);
    });

    test('element in shadow root having parent with aria-hidden="true" is hidden', () => {
        configure({ includeShadowDom: true });

        const element = document.createElement('div');
        const parent = document.createElement('div');
        const shadowRoot = parent.attachShadow({ mode: 'open' });

        parent.setAttribute('aria-hidden', 'true');
        shadowRoot.appendChild(element);

        expect(isHidden(element)).toBe(true);
    });

    test('element deeply in shadow root having parent up in the tree with aria-hidden="true" is hidden', () => {
        configure({ includeShadowDom: true });

        const hiddenParent = document.createElement('div');
        const parentWithShadowRoow = document.createElement('div');
        hiddenParent.setAttribute('aria-hidden', 'true');
        hiddenParent.appendChild(parentWithShadowRoow);

        const element = document.createElement('div');
        const shadowRoot = parentWithShadowRoow.attachShadow({ mode: 'open' });

        shadowRoot.appendChild(element);

        expect(isHidden(element)).toBe(true);
    });

    test('does not traverse shadow dom when config.includeShadowDom is false', () => {
        configure({ includeShadowDom: false });

        const element = document.createElement('div');
        const parent = document.createElement('div');
        const shadowRoot = parent.attachShadow({ mode: 'open' });

        parent.setAttribute('aria-hidden', 'true');
        shadowRoot.appendChild(element);

        expect(isHidden(element)).toBe(false);
    });
});

describe('isInDOM', () => {
    test('mounted element is in DOM', () => {
        const element = document.createElement('div');
        appendToRoot(element);

        expect(isInDOM(element)).toBe(true);
    });

    test('unmounted element is not in DOM', () => {
        const element = document.createElement('div');

        expect(isInDOM(element)).toBe(false);
    });

    test('document body is in DOM', () => {
        expect(isInDOM(document.body)).toBe(true);
    });

    test('mounted text node is in DOM', () => {
        const element = document.createElement('div');
        const text = document.createTextNode('Hello world');
        element.appendChild(text);
        appendToRoot(element);

        expect(isInDOM(text)).toBe(true);
    });

    test('unmounted text node is not in DOM', () => {
        const text = document.createTextNode('Hello world');

        expect(isInDOM(text)).toBe(false);
    });

    test('element inside mounted shadow root is in DOM', () => {
        configure({ includeShadowDom: true });

        const parent = document.createElement('div');
        const shadowRoot = parent.attachShadow({ mode: 'open' });
        appendToRoot(parent);

        const element = document.createElement('div');
        shadowRoot.appendChild(element);

        expect(isInDOM(element)).toBe(true);
    });

    test('does not traverse shadow dom when config.includeShadowDom is false', () => {
        configure({ includeShadowDom: false });

        const parent = document.createElement('div');
        const shadowRoot = parent.attachShadow({ mode: 'open' });
        appendToRoot(parent);

        const element = document.createElement('div');
        shadowRoot.appendChild(element);

        expect(isInDOM(element)).toBe(false);
    });

    test('element inside unmounted shadow root is not in DOM', () => {
        configure({ includeShadowDom: true });

        const parent = document.createElement('div');
        const shadowRoot = parent.attachShadow({ mode: 'open' });

        const element = document.createElement('div');
        shadowRoot.appendChild(element);

        expect(isInDOM(element)).toBe(false);
    });

    test('text node inside mounted shadow root is in DOM', () => {
        configure({ includeShadowDom: true });

        const parent = document.createElement('div');
        const shadowRoot = parent.attachShadow({ mode: 'open' });
        appendToRoot(parent);

        const text = document.createTextNode('Hello world');
        const element = document.createElement('div');
        element.appendChild(text);
        shadowRoot.appendChild(element);

        expect(isInDOM(text)).toBe(true);
    });

    test('text node inside unmounted shadow root is not in DOM', () => {
        configure({ includeShadowDom: true });

        const parent = document.createElement('div');
        const shadowRoot = parent.attachShadow({ mode: 'open' });

        const text = document.createTextNode('Hello world');
        const element = document.createElement('div');
        element.appendChild(text);
        shadowRoot.appendChild(element);

        expect(isInDOM(text)).toBe(false);
    });

    test('element inside multiple nested mounted shadow roots is in DOM', () => {
        configure({ includeShadowDom: true });

        const firstParent = document.createElement('div');
        firstParent.attachShadow({ mode: 'open' });
        appendToRoot(firstParent);

        const secondParent = document.createElement('div');
        secondParent.attachShadow({ mode: 'open' });
        firstParent.shadowRoot!.appendChild(secondParent);

        const element = document.createElement('div');
        secondParent.shadowRoot!.appendChild(element);

        expect(isInDOM(element)).toBe(true);
    });
});
