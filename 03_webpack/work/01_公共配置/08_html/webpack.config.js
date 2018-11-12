const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin")
module.exports={
    entry:`${__dirname}/app.js`,
    output:{
        path:path.resolve(__dirname,"dist"),//输出目录
        filename: "js/index.js"
    },
    module:{
      rules:[
          {
              test:/\.less/,
              use:[
                  {
                      loader:"style-loader",
                  },
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
          },
          {
              test:/\.(jpg|jpeg|png|gif)$/,
              use:[
                  {
                      loader:"url-loader",
                      options:{
                          publicPath:"./img",//发布目录
                          outputPath:"img",
                          name:"[name].[hash:8].[ext]",
                          limit:10000
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
                          attrs:['img:src']
                      }
                  }
              ]
          }
      ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:`${__dirname}/index.html`,
            filename:'index.html'
        })
    ]
}