const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports={
    entry:"./app.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"[name].[chunkhash].js"
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
          }
      ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:"./index.html",
            filename:"index.html"
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
}