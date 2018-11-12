const path = require('path');
const PurifyCSS = require("purifycss-webpack");
const glob = require("glob-all");
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        A:"./app.js",
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.css/,
                use:ExtractTextWebpackPlugin.extract({
                    fallback: {
                        loader:'style-loader'
                    },
                    use:[
                        {
                            loader:'css-loader',
                        }
                    ]
                })
            }
        ]
    },
    plugins:[
        new ExtractTextWebpackPlugin({
            filename:'[name].min.css',
            allChunks:false
        }),
        new PurifyCSS({
          paths:glob.sync([
              path.join(__dirname,'./*.html')
          ])
        }),
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:"./index.html"
        })
    ]
};