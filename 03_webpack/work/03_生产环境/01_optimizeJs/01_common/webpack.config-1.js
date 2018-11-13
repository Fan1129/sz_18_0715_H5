const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports={
    entry:{
        A:`${__dirname}/src1/A.js`
    },
    output:{
        path:path.resolve(__dirname,"dist1"),
        filename:"[name].bundle.js"
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            name:"common"
        }),
        new htmlWebpackPlugin({
            template:"./index.html",
            filename:"index.html"
        })
    ]
}