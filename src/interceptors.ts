export type Restore = () => void;

/** Indicates whether interception should happen before or after the original method calling */
type ExecutionOrder = 'BEFORE' | 'AFTER';

/**
 * Intercept objects setters of property
 * - Original setter is invoked first
 */
export function interceptSetter<
    T extends object = object,
    P extends keyof T = keyof T,
    K extends T[P] = T[P],
>(obj: T, property: P, method: (value: K) => void): Restore {
    const descriptor = Object.getOwnPropertyDescriptor(obj, property);

    if (!descriptor || !descriptor.set) {
        throw new Error(
            `Unable to intercept ${String(property)}. No descriptor available.`
        );
    }

    const originalSetter = descriptor.set;

    descriptor.set = function interceptedSet(value: K) {
        const output = originalSetter.call(this, value);
        method.call(this, value);

        return output;
    };

    Object.defineProperty(obj, property, descriptor);

    return function restore() {
        descriptor.set = originalSetter;
        Object.defineProperty(obj, property, descriptor);
    };
}

/**
 * Intercept method calls of given object
 * - Original method is invoked first by default
 */
export function interceptMethod<
    T extends object = object,
    P extends keyof T = keyof T,
>(
    object: T,
    methodName: P,
    method: (...args: any[]) => void,
    order: ExecutionOrder = 'AFTER'
): Restore {
    const original = object[methodName] as unknown as typeof method;

    if (typeof original !== 'function') {
        throw new Error(
            `Expected ${String(
                methodName
            )} to be a function. Received ${typeof original}: ${original}`
        );
    }

    if (typeof method !== 'function') {
        throw new Error(
            `Expected method to be a function. Received ${typeof method}: ${method}`
        );
    }

    function interceptedMethod(this: T, ...args: any) {
        if (order === 'BEFORE') {
            method.call(this, ...args);
        }

        const output = original.call(this, ...args);

        if (order === 'AFTER') {
            method.call(this, ...args);
        }

        return output;
    }

    object[methodName] = interceptedMethod as any;

    return function restore() {
        object[methodName] = original as any;
    };
}
