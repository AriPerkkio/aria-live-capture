import { configure } from '../src/config';
import {
    getClosestElement,
    getClosestLiveRegion,
    getTextContent,
    isInDOM,
} from '../src/utils';
import { appendToRoot } from './utils';

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
