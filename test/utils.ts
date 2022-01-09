interface TestAttributes {
    name?: 'role' | 'aria-live';
    value?:
        | 'status'
        | 'alert'
        | 'log'
        | 'timer'
        | 'marquee'
        | 'assertive'
        | 'polite'
        | 'off';
    tag?: 'div' | 'output';
    testName: string;
}

function addTestName(attr: Omit<TestAttributes, 'testName'>): TestAttributes {
    if (attr.tag) {
        return {
            ...attr,
            testName: `<${attr.tag}>`,
        };
    }

    return {
        ...attr,
        testName: `[${attr.name}="${attr.value}"]`,
    };
}

export const POLITE_CASES: TestAttributes[] = ([
    { name: 'role', value: 'status' },
    { name: 'role', value: 'log' },
    { name: 'aria-live', value: 'polite' },
    { tag: 'output' },
] as const).map(addTestName);

export const ASSERTIVE_CASES: TestAttributes[] = ([
    { name: 'role', value: 'alert' },
    { name: 'aria-live', value: 'assertive' },
] as const).map(addTestName);

export const OFF_CASES: TestAttributes[] = ([
    { name: 'role', value: 'marquee' },
    { name: 'role', value: 'timer' },
    { name: 'aria-live', value: 'off' },
] as const).map(addTestName);

export function appendToRoot(element: HTMLElement): void {
    const root = document.getElementById('root');
    if (!root) throw new Error('Root missing');

    root.appendChild(element);
}
