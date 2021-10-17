import { getTextContent } from '../src/utils';

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
