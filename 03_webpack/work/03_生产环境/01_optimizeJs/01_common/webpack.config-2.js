const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports={
    entry:{
        A:`${__dirname}/src2/A.js`,
        B:`${__dirname}/src2/B.js`,
    },
    output:{
        path:path.resolve(__dirname,"dist4"),
        filename:"[name].bundle.js"
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            name:"buscommon"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:"webpackcommon"
        }),
        new htmlWebpackPlugin({
            template:"./index.html",
            filename:"index.html"
        })
    ]
}