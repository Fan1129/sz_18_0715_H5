var path = require("path");
var webpack = require("webpack");
var htmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const PurifyCSS = require("purifycss-webpack");
const glob = require("glob-all");

module.exports={
    entry:`${__dirname}/app.js`,
    output:{
        path:path.resolve(__dirname,"dist"),
        filename: "index.js"
    },
    module:{
      rules:[
          {
              test:/\.less/,
              use:ExtractTextWebpackPlugin.extract({
                  fallback:{
                      loader:"style-loader",
                      options:{
                          singleton:true
                      }
                  },
                  use:[
                      {
                          loader:"css-loader",
                      },
                      {
                          loader:"postcss-loader",
                      },
                      {
                          loader:"less-loader",
                      }
                  ]
              })
          },
          {
              test:/\.css$/,
              use:[
                      {
                          loader:"style-loader",
                          options:{
                              // insertInto:"#test",
                              singleton:true
                          }
                      },
                      {
                          loader:"css-loader",
                          options:{
                              modules:true
                          }
                      }
              ]
          }
      ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:"./index.html",
            filename:"[name].[chunkhash].html"
        }),
        new ExtractTextWebpackPlugin({
            filename:'[name].[chunkhash].css'
        }),
        new PurifyCSS({
            paths:glob.sync([
                path.join(__dirname,'./*.html')
            ])
        })

    ]
}