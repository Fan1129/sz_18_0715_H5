const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports={
    entry:{
        A:`${__dirname}/src/A.js`,
        B:`${__dirname}/src/B.js`,
        vender:["lodash","jquery"]
    },
    output:{
        path:path.resolve(__dirname,"dist7"),
        filename:"[name].[chunkhash].js",
        chunkFilename:"[name].[chunkhash]-chunk.js"
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

        new webpack.NamedChunksPlugin(),
        new webpack.NamedModulesPlugin(),


        new htmlWebpackPlugin({
            template:"./index.html",
            filename:"index.html"
        })
    ]
}