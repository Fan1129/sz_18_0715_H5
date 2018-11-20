const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const PurifyCSS = require("purifycss-webpack");
const glob = require("glob-all");
const HtmlWebpackInlineChunkPlugin = require('html-webpack-inline-chunk-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let pathsToClean = [
    'dist'
]

// the clean options to use
let cleanOptions = {
    root:   path.resolve(__dirname,"../")
}

module.exports={
    plugins: [
        new CleanWebpackPlugin(pathsToClean, cleanOptions),

        new webpack.optimize.CommonsChunkPlugin({
            name:"vender"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:"webpackcommon"
        }),

        new webpack.NamedChunksPlugin(),
        new webpack.NamedModulesPlugin(),

        new webpack.optimize.UglifyJsPlugin(),


        new OptimizeCssAssetsPlugin(),


        new PurifyCSS({
            paths:glob.sync([
                path.join(__dirname,'./*.html')
            ])
        }),



        new ExtractTextWebpackPlugin({
            filename:'[name].[chunkhash].css'
        }),
        new HtmlWebpackInlineChunkPlugin({
            inlineChunks:['webpackcommon']
        }),
    ]
}