const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
const PurifyCSS = require("purifycss-webpack");
const glob = require("glob-all");
const HtmlWebpackInlineChunkPlugin = require('html-webpack-inline-chunk-plugin');


module.exports={
    entry:{
        tai:`${__dirname}/taiUi/tai.js`
    },
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"[name].min.js"
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:'babel-loader',
                exclude:'/node_modules/'
            },
            {
                test:/\.less/,
                use:ExtractTextWebpackPlugin.extract({
                    fallback: {
                        loader:'style-loader'
                    },
                    use:[
                        {
                            loader:'css-loader',
                        },
                        {
                            loader:'postcss-loader',
                            options:{
                                ident:'postcss',
                                plugins:[
                                    require('autoprefixer')()
                                ]
                            }
                        },
                        {
                            loader:'less-loader',
                        }
                    ]
                })
            },
            {
                test:/\.(jpg|png|gif|jpeg)$/,
                use:[
                    {
                        loader:"url-loader",
                        options:{
                            limit:10000,
                            name:"[path][name].[ext]"
                        }
                    },
                    {
                        loader:"img-loader"
                    },
                    {
                        loader: 'image-webpack-loader'
                    }
                ]
            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader:'html-loader',
                        options:{
                            attrs:['img:src'],
                            // minimize: true
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:"./tai.html"
        }),
        new CleanWebpackPlugin (['dist']),
        new CopyWebpackPlugin([{ from: './static/**/*', to: './' } ]),
        new OptimizeCssAssetsPlugin(),
        new UglifyJsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name:"common"
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextWebpackPlugin({
            filename:'[name].min.css'
        }),
        new ExtractTextWebpackPlugin({
            filename:'[name].min.css',
            allChunks:false
        }),
        new PurifyCSS({
            paths:glob.sync([
                path.join(__dirname,'./*.html')
            ])
        }),
        new HtmlWebpackInlineChunkPlugin({
            inlineChunks:['common']
        })
    ]
}
