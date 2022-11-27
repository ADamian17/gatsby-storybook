import type { CreateWebpackConfigArgs, CreatePagesArgs } from 'gatsby';
import path from 'path';

exports.onCreateWebpackConfig = ({ actions }: CreateWebpackConfigArgs) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@containers': path.resolve(__dirname, 'src/containers'),
        '@contexts': path.resolve(__dirname, 'src/contexts'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@layouts': path.resolve(__dirname, 'src/layouts'),
        '@services': path.resolve(__dirname, 'src/services'),
        '@sp-state': path.resolve(__dirname, 'src/sp-state'),
        '@types': path.resolve(__dirname, 'src/types'),
        '@utils': path.resolve(__dirname, 'src/utils'),
      },
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    },
  });
};
