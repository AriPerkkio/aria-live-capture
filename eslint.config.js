import { readFileSync } from 'node:fs';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier/recommended';

const tsconfig = JSON.parse(readFileSync('./tsconfig.json', 'utf8'));

export default defineConfig([
    js.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked.map(config => ({
        ...config,
        files: tsconfig.include,
    })),
    {
        files: tsconfig.include,
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        rules: {
            '@typescript-eslint/ban-types': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },
    {
        files: ['.storybook/**', 'test/**'],
        rules: {
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-unsafe-call': 'off',
            '@typescript-eslint/no-unsafe-return': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off',
            '@typescript-eslint/await-thenable': 'off',
            '@typescript-eslint/require-await': 'off',
            '@typescript-eslint/no-unsafe-argument': 'off',
        },
    },
    { ignores: ['dist', 'docs', '!.storybook'] },
    prettier,
]);

/** @param config {import('eslint').Linter.FlatConfig} */
function defineConfig(config) {
    return config;
}
