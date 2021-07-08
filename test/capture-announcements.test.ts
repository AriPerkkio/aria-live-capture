import CaptureAnnouncements from '../src';
import { appendToRoot, POLITE_CASES, ASSERTIVE_CASES } from './utils';

POLITE_CASES.forEach(({ name, value, tag }) => {
    const testName = name && value ? `[${name}="${value}"]` : `<${tag}>`;

    describe(testName, () => {
        let element: HTMLElement;
        let cleanup: undefined | ReturnType<typeof CaptureAnnouncements>;
        const onCapture = jest.fn();
        const onIncorrectStatusMessage = jest.fn();

        afterEach(() => {
            cleanup?.();
            onCapture.mockReset();
            onIncorrectStatusMessage.mockReset();
        });

        beforeEach(() => {
            cleanup = CaptureAnnouncements({
                onCapture,
                onIncorrectStatusMessage,
            });

            const container = document.createElement(tag || 'div');
            if (name && value) {
                container.setAttribute(name, value);
            }

            element = container;
        });

        test('should not announce when initially rendered with content', () => {
            element.textContent = 'Hello world';
            appendToRoot(element);

            expect(onCapture).not.toHaveBeenCalled();
            expect(onIncorrectStatusMessage).toHaveBeenCalledWith(
                'Hello world'
            );
        });

        test('should announce when dynamically rendered into container', () => {
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
            const container = document.createElement(tag || 'div');
            container.textContent = 'Hello world';
            appendToRoot(container);

            if (name && value) {
                container.setAttribute(name, value);
            }

            expect(onCapture).not.toHaveBeenCalled();
        });

        test('should announce when role is set after render and content is updated', () => {
            const container = document.createElement(tag || 'div');
            container.textContent = 'First';
            appendToRoot(container);

            if (name && value) {
                container.setAttribute(name, value);
            }
            container.textContent = 'Second';

            expect(onCapture).not.toHaveBeenCalledWith(
                'First',
                expect.anything()
            );
            expect(onCapture).toHaveBeenCalledWith('Second', 'polite');
        });

        test('should announce when text node is appended into existing container', () => {
            appendToRoot(element);

            element.appendChild(document.createTextNode('Hello world'));

            expect(onCapture).toHaveBeenCalledWith('Hello world', 'polite');
        });
    });
});

ASSERTIVE_CASES.forEach(({ name, value }) => {
    describe(`[${name}="${value}"]`, () => {
        let element: HTMLElement;
        let cleanup: undefined | ReturnType<typeof CaptureAnnouncements>;
        const onCapture = jest.fn();

        afterEach(() => {
            cleanup?.();
            onCapture.mockReset();
        });

        beforeEach(() => {
            cleanup = CaptureAnnouncements({ onCapture });

            const container = document.createElement('div');
            if (name && value) {
                container.setAttribute(name, value);
            }

            element = container;
        });

        test('should announce when dynamically rendered with initially content', () => {
            element.textContent = 'Hello world';
            appendToRoot(element);

            expect(onCapture).toHaveBeenCalledWith('Hello world', 'assertive');
        });

        test('should announce when dynamically rendered into container', () => {
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

        test('should announce when role is set after render', () => {
            const container = document.createElement('div');
            container.textContent = 'Hello world';
            appendToRoot(container);

            if (name && value) {
                container.setAttribute(name, value);
            }

            expect(onCapture).toHaveBeenCalledWith('Hello world', 'assertive');
        });

        test('should announce when role is set after render and content is updated', () => {
            const container = document.createElement('div');
            container.textContent = 'First';
            appendToRoot(container);

            if (name && value) {
                container.setAttribute(name, value);
            }
            container.textContent = 'Second';

            expect(onCapture).toHaveBeenCalledWith('First', 'assertive');
            expect(onCapture).toHaveBeenCalledWith('Second', 'assertive');
        });

        test('should announce when content is added with `insertBefore`', async () => {
            const parent = document.createElement('div');
            const sibling = document.createElement('div');
            parent.appendChild(sibling);
            appendToRoot(parent);

            element.textContent = 'Hello world';
            parent.insertBefore(element, sibling);

            expect(onCapture).toHaveBeenCalledWith('Hello world', 'assertive');
        });

        test('should announce when content is added with `replaceChild`', async () => {
            const parent = document.createElement('div');
            const oldChild = document.createElement('div');
            parent.appendChild(oldChild);
            appendToRoot(parent);

            element.textContent = 'Hello world';
            parent.replaceChild(element, oldChild);

            expect(onCapture).toHaveBeenCalledWith('Hello world', 'assertive');
        });

        test('should announce when content is added with `insertAdjacentElement`', async () => {
            const parent = document.createElement('div');
            const sibling = document.createElement('div');
            parent.appendChild(sibling);
            appendToRoot(parent);

            element.textContent = 'Hello world';
            sibling.insertAdjacentElement('afterbegin', element);

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
            const sibling = document.createElement('div');
            appendToRoot(sibling);

            element.textContent = 'Hello world';
            sibling.before(element);

            expect(onCapture).toHaveBeenCalledWith('Hello world', 'assertive');
        });

        test('should announce when content is added with `append`', async () => {
            const parent = document.createElement('div');
            appendToRoot(parent);

            element.textContent = 'Hello world';
            parent.append(element);

            expect(onCapture).toHaveBeenCalledWith('Hello world', 'assertive');
        });

        test('should announce when content is added with `prepend`', async () => {
            const parent = document.createElement('div');
            appendToRoot(parent);

            element.textContent = 'Hello world';
            parent.prepend(element);

            expect(onCapture).toHaveBeenCalledWith('Hello world', 'assertive');
        });

        test('should announce when content is added with `replaceChildren`', () => {
            const parent = document.createElement('div');
            const child = document.createElement('div');
            parent.appendChild(child);
            appendToRoot(parent);

            element.textContent = 'Hello world';
            parent.replaceChild(element, child);

            expect(onCapture).toHaveBeenCalledWith('Hello world', 'assertive');
        });
    });
});

describe('common', () => {
    let element: HTMLElement;
    let cleanup: undefined | ReturnType<typeof CaptureAnnouncements>;
    const onCapture = jest.fn();
    const onIncorrectStatusMessage = jest.fn();

    afterEach(() => {
        cleanup?.();
        onCapture.mockReset();
        onIncorrectStatusMessage.mockReset();
    });

    beforeEach(() => {
        cleanup = CaptureAnnouncements({
            onCapture,
            onIncorrectStatusMessage,
        });

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

    test('onIncorrectStatusMessage should trim white-space', () => {
        element.setAttribute('role', 'status');

        const first = document.createElement('div');
        first.textContent = '    First   message here';
        const second = document.createElement('div');
        second.textContent = '    Second   message   here ';

        const child = document.createElement('div');
        child.appendChild(first);
        child.appendChild(second);
        element.appendChild(child);

        // Parent is mounted with role="status" and textContent
        appendToRoot(element);

        expect(onIncorrectStatusMessage).toHaveBeenCalledWith(
            'First message here Second message here'
        );
    });

    test('onCapture should not report when textContent is empty', () => {
        element.setAttribute('role', 'status');
        appendToRoot(element);

        element.textContent = ' ';
        element.textContent = '    ';

        // prettier-ignore
        element.textContent = `
                                
                                
                                
        `;

        expect(onCapture).not.toHaveBeenCalled();
    });

    test('onIncorrectStatusMessage should not report when textContent is empty', () => {
        const element2 = document.createElement('div');
        const element3 = document.createElement('div');

        element.setAttribute('role', 'status');
        element2.setAttribute('role', 'status');
        element3.setAttribute('role', 'status');

        element.textContent = ' ';
        element2.textContent = '    ';

        // prettier-ignore
        element3.textContent = `
                                
                                
                                
        `;

        appendToRoot(element);
        appendToRoot(element2);
        appendToRoot(element3);

        expect(onIncorrectStatusMessage).not.toHaveBeenCalled();
    });
});
