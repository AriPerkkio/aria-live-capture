import { configure } from '../src/config';
import { getTextContent, isInDOM } from '../src/utils';
import { appendToRoot } from './utils';

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
