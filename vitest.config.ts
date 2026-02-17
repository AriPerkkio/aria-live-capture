import { defineConfig } from 'vitest/config';
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin';

export default defineConfig({
    plugins: [
        storybookTest({
            configDir: '.storybook',
            tags: {
                include: [],
                exclude: [],
                skip: [],
            },
        }),
    ],
    test: {
        include: ['test/**/*.test.ts'],
        setupFiles: ['./test/setup.ts'],
        reporters: process.env.CI ? 'default' : 'verbose',

        coverage: {
            enabled: true,
            include: ['src'],
            thresholds: {
                statements: 90,
                branches: 85,
                functions: 95,
                lines: 90,
            },
        },

        projects: [
            {
                extends: true,
                test: {
                    name: 'storybook',
                    setupFiles: ['.storybook/vitest.setup.ts'],
                    browser: {
                        enabled: true,
                        headless: true,
                        name: 'chromium',
                        provider: 'playwright',
                    },
                },
            },
            {
                extends: true,
                test: {
                    name: 'Browser',
                    browser: {
                        enabled: true,
                        headless: true,
                        name: 'chromium',
                        provider: 'playwright',
                    },
                },
            },
            {
                extends: true,
                test: {
                    name: 'JSDOM',
                    environment: 'jsdom',
                },
            },
        ],
    },
});
