/** @type {import('eslint/lib/shared/types').ConfigData} */
module.exports = {
    root: true,
    env: {
        node: true,
        es6: true,
        jasmine: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        'prettier/prettier': 'error',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
    },
    overrides: [
        {
            files: ['test/**'],
            extends: [
                'plugin:testing-library/dom',
                'plugin:jest-dom/recommended',
            ],
            rules: {
                '@typescript-eslint/no-non-null-assertion': 'off',
            },
        },
        {
            files: ['.storybook/**'],
            rules: {
                '@typescript-eslint/explicit-module-boundary-types': 'off',
                '@typescript-eslint/ban-ts-comment': 'off',
            },
        },
        {
            files: ['cypress/support/**'],
            rules: {
                '@typescript-eslint/no-namespace': 'off',
            },
        },
    ],
    ignorePatterns: [
        'dist',
        'docs',
        '!.storybook',
        'cypress/videos',
        'cypress/screenshots',
    ],
};
