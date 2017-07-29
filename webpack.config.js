const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        'babel-polyfill',
        'whatwg-fetch',
        './src/main/js/index.js'
    ],

    output: {
        path: path.resolve('lib'),
        filename: 'okConnect.js',
        libraryTarget: 'umd',
        library: 'okConnect',
    },

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                include: [path.resolve('src')],
                exclude: [path.resolve('node_modules')],
                loader: 'eslint-loader'
            }, {
                test: /\.js$/,
                include: [path.resolve('src')],
                exclude: [path.resolve('node_modules')],
                loader: 'babel-loader'
            }
        ]
    },

    externals: {
        'is_js': 'is',
        'HttpStatus': 'HttpStatus',
    },

    resolve: {
        extensions: ['.js']
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false,
            }
        }),
    ],
};
