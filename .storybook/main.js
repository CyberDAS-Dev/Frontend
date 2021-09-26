const path = require('path')

module.exports = {
    stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    webpackFinal: async (config) => {
        config.resolve.modules = [...(config.resolve.modules || []), path.resolve(__dirname, '../')]

        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname, '../'),
        }

        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../'),
        })

        return config
    },
}
