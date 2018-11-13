const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports={
    entry:{
        A:`${__dirname}/src3/A.js`,
        B:`${__dirname}/src3/B.js`,
        vender:["lodash","jquery"]
    },
    output:{
        path:path.resolve(__dirname,"dist2"),
        filename:"[name].bundle.js"
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            name:"buscommon",
            chunks:["A","B"]
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:"vender"
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