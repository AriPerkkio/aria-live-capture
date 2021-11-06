/** @type {import('@jest/types/build/Config').ProjectConfig} */
module.exports = {
    testEnvironment: 'jsdom',
    preset: 'ts-jest',
    verbose: true,
    roots: ['test'],
    setupFilesAfterEnv: ['./test/jest.setup.ts'],
};
