const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

// ...the TerserPlugin is a great place to start for minification and being used by default...
// https://webpack.js.org/guides/production/

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
});
