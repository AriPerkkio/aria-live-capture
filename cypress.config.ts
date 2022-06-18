import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        baseUrl: 'http://localhost:6006',
        video: false,
        fixturesFolder: false,
        specPattern: 'cypress/integration/*.test.ts',
    },
});
