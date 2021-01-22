/* eslint-disable @typescript-eslint/no-var-requires */
const Promise = require('bluebird');
const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '../../theme.config$': path.join(
          __dirname,
          'src/semantic-ui/theme.config',
        ),
      },
    },
  });
};
