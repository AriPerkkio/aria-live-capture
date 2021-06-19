module.exports = {
    testEnvironment: 'jsdom',
    preset: 'ts-jest',
    verbose: true,
    setupFilesAfterEnv: ['./test/jest.setup.ts'],
};
