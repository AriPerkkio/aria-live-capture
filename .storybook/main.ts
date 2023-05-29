import { mergeConfig, type UserConfig } from 'vite';
import type { StorybookConfig } from '@storybook/html-vite';

const config: StorybookConfig = {
    stories: [
        './README.stories.mdx',
        './**/AriaLive*.stories.ts',
        './**/Role*.stories.ts',
        './**/Output.stories.ts',
        './**/ElementApi.stories.ts',
        './**/*.stories.ts',
    ],
    addons: ['@storybook/addon-docs', '@storybook/addon-interactions'],
    framework: '@storybook/html-vite',

    async viteFinal(config, { configType }) {
        const viteConfig: UserConfig = {
            // Storybook is deployed at Github Pages
            base: configType === 'PRODUCTION' ? '/aria-live-capture/' : '/',

            // Preserve names of functions. Those are used when adding custom Story names.
            esbuild: { keepNames: true },
        };

        return mergeConfig(config, viteConfig);
    },
};

export default config;
