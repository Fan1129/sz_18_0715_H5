const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports={
    entry:{
        A:`${__dirname}/src2/A.js`,
        B:`${__dirname}/src2/B.js`,
    },
    output:{
        path:path.resolve(__dirname,"dist5"),
        filename:"[name].bundle.js"
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            name:"xxxxx" // common chunk
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:"A" // entry chunk
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:"webpackcommon" // common chunk
        }),
        new htmlWebpackPlugin({
            template:"./index.html",
            filename:"index.html"
        })
    ]
}