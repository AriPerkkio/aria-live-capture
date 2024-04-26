import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        reporters: process.env.CI ? 'default' : 'verbose',
        coverage: {
            enabled: true,
            provider: 'istanbul',
            include: ['src'],
            thresholds: {
                statements: 90,
                branches: 85,
                functions: 95,
                lines: 90,
            },
        },
    },
});
