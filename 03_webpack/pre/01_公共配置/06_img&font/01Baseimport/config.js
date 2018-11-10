const path = require('path');

module.exports = {
  entry: {
      app:"./app.js"
  },
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
      // publicPath:"./dist/"
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
                          name:"[path][hash].[ext]",
                          publicPath:"./dist"
                      }
                     /* options:{
                          name:"[hash].[ext]",
                          useRelativePath:true,
                          // publicPath:"./dist"
                      }*/
                  }
              ]
          }
      ]
  }
};
