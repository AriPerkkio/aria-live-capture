import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        include: ['test/**/*.test.ts'],
        browser: {
            enabled: true,
            name: 'chromium',
            provider: 'playwright',
        },
        setupFiles: ['./test/setup.ts'],
        reporters: ['verbose'],
    },
});
