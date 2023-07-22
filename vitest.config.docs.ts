import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        include: ['./.storybook/docs.test.ts'],
        reporters: ['verbose'],
    },
});
