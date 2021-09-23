interface TestAttributes {
    name?: 'role' | 'aria-live';
    value?: 'status' | 'alert' | 'log' | 'assertive' | 'polite';
    tag?: 'div' | 'output';
    testName: string;
}

export const POLITE_CASES: TestAttributes[] = [
    { name: 'role', value: 'status', testName: '[role="status"]' },
    { name: 'role', value: 'log', testName: '[role="log"]' },
    { name: 'aria-live', value: 'polite', testName: '[aria-live="polite"]' },
    { tag: 'output', testName: '<output>' },
];

export const ASSERTIVE_CASES: TestAttributes[] = [
    { name: 'role', value: 'alert', testName: '[role="alert"]' },
    {
        name: 'aria-live',
        value: 'assertive',
        testName: '[aria-live="assertive"]',
    },
];

export function appendToRoot(element: HTMLElement): void {
    const root = document.getElementById('root');
    if (!root) throw new Error('Root missing');

    root.appendChild(element);
}
