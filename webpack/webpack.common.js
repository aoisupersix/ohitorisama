const webpack = require("webpack");
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        jalan_contentscript: path.join(__dirname, '..', 'src', 'jalan_contentscript.ts')
    },
    output: {
        path: path.join(__dirname, '..', 'dist', 'js'),
        filename: '[name].js'
    },
    optimization: {
        splitChunks: {
            name: 'vendor',
            chunks: "initial"
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [
        // exclude locale files in moment
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new CopyPlugin({
            patterns: [
                {
                    from: '.',
                    to: '..',
                    context: 'public',
                }
            ],
        }),
    ]
};