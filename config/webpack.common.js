const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const packageJson = require('../package.json');

const reactAppName = packageJson.name;

console.log('APP NAME IS :::', reactAppName);
const srcPath = path.resolve('src');
console.log('src path ::: ', srcPath);

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '...'], // ... 을 넣어야 default extions가 활성화되어 오류가안난다!
    modules: [srcPath, 'node_modules'], // import 할때 상대경로를 입력하지않으면 src 폴더를 우선적으로 찾음
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es2015',
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  mode: 'development',
  output: {
    publicPath: '',
    filename: 'js/[name].[contenthash:8].js',
    path: path.resolve(__dirname, '../build/' + reactAppName),
    library: '[name]',
    libraryTarget: 'window',
    libraryExport: 'default',
  },
  devServer: {
    hot: true,
    port: 3100,
    open: false,
    allowedHosts: 'all', // nginx 설정...
    historyApiFallback: true, // dev server router 새로고침시 404 에러 해결
    client: { logging: 'warn' },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'dist/index.html',
    }),
    new MiniCssExtractPlugin(),
    new WebpackManifestPlugin({
      // 분리빌드 app 에서 사용하기 위한  manifest설정
      fileName: 'asset-manifest.json',
      publicPath: '/',
      generate: (seed, files) => {
        const manifestFiles = files.reduce((manifest, file) => {
          manifest[file.name] = file.path;
          return manifest;
        }, seed);

        return {
          files: manifestFiles,
          id: reactAppName,
        };
      },
    }),
  ],
};
