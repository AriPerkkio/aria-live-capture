module.exports = {
    stories: ['./README.stories.mdx', './**/*.stories.ts'],
    addons: [
        {
            name: '@storybook/addon-docs',
            options: { transcludeMarkdown: true },
        },
    ],
    core: { builder: '@storybook/builder-vite' },
};
