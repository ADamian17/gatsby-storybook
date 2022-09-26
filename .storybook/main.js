const path = require('path');

const webpackFinal = async (config) => {
  config.resolve = {
    ...config.resolve,
    extensions: [
      ...config.resolve.extensions,
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.json',
    ],
    alias: {
      ...config.resolve.alias,
      '@types': path.resolve(__dirname, 'src/types'),
    },
  };
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            includePaths: ['src/styles'],
          },
        },
      },
    ],
  });

  return config;
};

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-scss',
  ],
  staticDirs: ['../static'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal,
};
