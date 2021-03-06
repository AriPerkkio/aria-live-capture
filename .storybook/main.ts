import { mergeConfig, UserConfig } from 'vite';
import type { StorybookViteConfig } from '@storybook/builder-vite';

const config: StorybookViteConfig = {
    stories: ['./README.stories.mdx', './**/*.stories.ts'],
    addons: [
        {
            name: '@storybook/addon-docs',
            options: { transcludeMarkdown: true },
        },
    ],
    core: { builder: '@storybook/builder-vite' },

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
