const path = require('path');

module.exports = {
    context: path.resolve('src'),

    entry: [
        'babel-polyfill', 'whatwg-fetch'
    ],

    output: {
        path: path.resolve('lib'),
        filename: 'okConnect.js'
    },

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                include: [path.resolve('app')],
                exclude: [path.resolve('node_modules')],
                loader: 'eslint-loader'
            }, {
                test: /\.js$/,
                include: [path.resolve('app')],
                exclude: [path.resolve('node_modules')],
                loader: 'babel-loader'
            }
        ]
    },

    resolve: {
        extensions: ['.js']
    },
};
