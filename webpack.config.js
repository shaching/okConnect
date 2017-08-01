const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

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
        new UglifyJSPlugin({
            parallel: true,
            uglifyOptions: {
                ecma: 8,
                compress: true,
                warnings: false
            }
        })
    ],
};
