const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineChunkPlugin = require('html-webpack-inline-chunk-plugin');

module.exports = {
    entry: {
        A:"./app.JS",
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            name:"common"
        }),
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:"./index.html"
        }),
        new HtmlWebpackInlineChunkPlugin({
            inlineChunks:['common']
        })
    ]
};