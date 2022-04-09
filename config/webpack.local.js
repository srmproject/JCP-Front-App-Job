const path = require('path');
const packageJson = require('../package.json');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const srcPath = path.resolve('src');
console.log('APP NAME IS :::', packageJson.name);

module.exports = merge(common, {
  devtool: 'inline-source-map', // production 일경우 source-map 처리
  entry: srcPath + '/index.tsx',
  optimization: {},
  externals: {},
});
