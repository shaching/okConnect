const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: ['@babel/polyfill', 'whatwg-fetch', './src/index.js'],
  output: {
    filename: 'okConnect.js',
    libraryTarget: 'umd',
    library: 'okConnect',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve('src')],
        exclude: [path.resolve('node_modules')],
        use: 'babel-loader',
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new FileManagerPlugin({
      events: {
        onStart: {
          delete: ['./dist/'],
        },
      },
    }),
    new ESLintPlugin(),
  ],
};
