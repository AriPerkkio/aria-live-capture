declare global {
    // eslint-disable-next-line
    namespace jest {
        interface Matchers<R> {
            /**
             * Assert whether given message was announced by ARIA live region.
             *
             * @param politenessSetting `POLITENESS_SETTING` of the announcement
             */
            toBeAnnounced(politenessSetting?: 'assertive' | 'polite'): R;
        }
    }
}

export {};
