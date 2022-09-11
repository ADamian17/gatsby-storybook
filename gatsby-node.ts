import type { CreateWebpackConfigArgs } from 'gatsby';
import path from 'path';

exports.onCreateWebpackConfig = ({ actions }: CreateWebpackConfigArgs) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@types': path.resolve(__dirname, 'src/types'),
      },
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
  });
};
