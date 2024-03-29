const path = require('path');
const React = require('react');

const webpackFinal = async (config) => {
  // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
  config.module.rules[0].exclude = [
    /node_modules\/(?!(gatsby|gatsby-script)\/)/,
  ];

  // Use correct react-dom depending on React version.
  if (parseInt(React.version) <= 18) {
    config.externals = ['react-dom/client'];
  }

  // Remove core-js to prevent issues with Storybook
  config.module.rules[0].exclude = [/core-js/];
  // Use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
  config.module.rules[0].use[0].options.plugins.push(
    require.resolve('babel-plugin-remove-graphql-queries')
  );

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
      '@components': path.resolve(__dirname, 'src/components'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
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
