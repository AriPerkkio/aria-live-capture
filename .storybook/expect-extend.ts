declare module 'vitest' {
    interface Assertion<T = any> {
        /**
         * Assert whether given message was announced by ARIA live region.
         *
         * @param politenessSetting `POLITENESS_SETTING` of the announcement
         */
        toBeAnnounced(politenessSetting?: 'assertive' | 'polite'): T;
    }
    // Vitest requires asymmetric matchers to be defined separately
    // for use with expect.stringContaining(), expect.arrayContaining(), etc.
    interface AsymmetricMatchersContaining {
        /**
         * Assert whether given message was announced by ARIA live region.
         *
         * @param politenessSetting `POLITENESS_SETTING` of the announcement
         */
        toBeAnnounced(politenessSetting?: 'assertive' | 'polite'): any;
    }
}

export {};
