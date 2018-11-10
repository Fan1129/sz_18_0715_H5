const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
      app:"./app.js"
  },
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js'
  },
  module:{
      rules:[
          {
              test:/\.less/,
              use:[
                  {
                      loader:'style-loader'
                  },
                  {
                      loader:'css-loader'
                  },
                  {
                      loader:'less-loader'
                  }
              ]
          },
          {
              test:/\.(png|jpg|jpeg|gif)$/,
              use:[
                  {
                      loader:'file-loader',
                      options:{
                          name:"[path][hash].[ext]"
                      }
                  }
              ]
          }
          /*{
              test:/\.html$/,
              use:[
                  {
                      loader:'html-loader',
                      options:{
                          attrs:['img:src']
                      }
                  }
              ]
          }*/

      ]
  },
    plugins:[
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:"./index.html"
        })
    ]

};
