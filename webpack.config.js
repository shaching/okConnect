const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        'whatwg-fetch',
        './src/main/js/index.js',
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
                use: 'eslint-loader'
            }, {
                test: /\.js$/,
                include: [path.resolve('src')],
                exclude: [path.resolve('node_modules')],
                use: 'babel-loader'
            }
        ]
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
        new webpack.optimize.OccurrenceOrderPlugin(),
    ],
};
