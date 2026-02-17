import { defineConfig } from 'vitest/config';
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin';

const UNIT_TEST_PATTERN = ['test/**/*.test.ts'];

export default defineConfig({
    test: {
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
                    name: 'storybook',
                    setupFiles: ['.storybook/vitest.setup.ts'],
                    coverage: {
                        enabled: false,
                    },
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
                    include: UNIT_TEST_PATTERN,
                    setupFiles: ['./test/setup.ts'],
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
                    include: UNIT_TEST_PATTERN,
                    setupFiles: ['./test/setup.ts'],
                    environment: 'jsdom',
                },
            },
        ],
    },
});
