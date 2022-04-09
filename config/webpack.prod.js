const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const packageJson = require('../package.json');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const srcPath = path.resolve('src');
console.log('APP NAME IS :::', packageJson.name);

module.exports = merge(common, {
  devtool: 'source-map', // production 일경우 source-map 처리
  entry: { [packageJson.name]: srcPath + '/App.tsx' },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  externals: {
    react: ['common-lib', 'React'],
    'react-router-dom': ['common-lib', 'ReactRouterDom'],
  },
});
