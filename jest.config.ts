import type { InitialOptionsTsJest } from 'ts-jest';

const config: InitialOptionsTsJest = {
    testEnvironment: 'jsdom',
    preset: 'ts-jest',
    verbose: true,
    roots: ['test'],
    setupFilesAfterEnv: ['./test/jest.setup.ts'],
};

export default config;
