const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
        enforce: 'pre',
        test: /\.js$/,
        include: [path.resolve('src')],
        exclude: [path.resolve('node_modules')],
        use: 'eslint-loader',
      },
      {
        test: /\.js$/,
        include: [path.resolve('src')],
        exclude: [path.resolve('node_modules')],
        use: 'babel-loader',
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
      }),
    ],
  },
  plugins: [
    new FileManagerPlugin({
      onStart: {
        delete: ['./dist/'],
      },
    }),
  ],
};
