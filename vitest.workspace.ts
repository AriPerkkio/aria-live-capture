import { defineWorkspace, type UserConfig } from 'vitest/config';

const config: UserConfig['test'] = {
    include: ['test/**/*.test.ts'],
    setupFiles: ['./test/setup.ts'],
};

export default defineWorkspace([
    {
        test: {
            name: 'Browser',
            browser: {
                enabled: true,
                name: 'chromium',
                provider: 'playwright',
                headless: true,
            },
            ...config,
        },
    },
    {
        test: {
            name: 'JSDOM',
            environment: 'jsdom',
            ...config,
        },
    },
]);
