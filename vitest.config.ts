import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';

export default defineConfig({
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
                    name: 'Browser',
                    browser: {
                        enabled: true,
                        headless: true,
                        provider: playwright(),
                        instances: [{ browser: 'chromium' }],
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
