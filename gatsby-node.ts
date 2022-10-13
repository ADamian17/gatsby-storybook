import type { CreateWebpackConfigArgs, CreatePagesArgs } from 'gatsby';
import path from 'path';

exports.onCreateWebpackConfig = ({ actions }: CreateWebpackConfigArgs) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@layouts': path.resolve(__dirname, 'src/layouts'),
        '@services': path.resolve(__dirname, 'src/services'),
        '@types': path.resolve(__dirname, 'src/types'),
      },
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
  });
};
