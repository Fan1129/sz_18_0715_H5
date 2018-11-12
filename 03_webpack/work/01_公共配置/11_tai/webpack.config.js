const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports={
    entry:`${__dirname}/src/taiUi/tai.js`,
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"index.js"
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:[
                    {
                        loader:"babel-loader"
                    }
                ]
            },
            {
                test:/\.less/,
                use:[
                    {
                        loader:"style-loader"
                    },
                    {
                        loader:"css-loader"
                    },
                    {
                        loader:"postcss-loader"
                    },
                    {
                        loader:"less-loader"
                    }
                ]
            },
            {
                test:/\.(jpg|jpeg|png|gif)$/,
                use:[
                    {
                        loader:"url-loader",
                        options:{
                            limit:10000,
                            name:"[name].[ext]",
                            outputPath:"img",
                            // publicPath:"img/"
                        }
                    }
                ]
            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader:"html-loader",
                        options:{
                            attrs:["img:src"]
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:`${__dirname}/src/tai.html`,
            fileName:"index.html"
        }),
        new CopyWebpackPlugin([{ from: `${__dirname}/src/static`, to: `${__dirname}/dist/static` }]),
        new CleanWebpackPlugin("./dist")
    ]
}