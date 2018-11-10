const path = require('path');

module.exports = {
  entry: {
      app:"./03Icon/app.js"
  },
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
      publicPath:'dist/'
  },
  module:{
      rules:[
          {
              test:/\.css/,
              use:[
                  {
                      loader:'style-loader'
                  },
                  {
                      loader:'css-loader'
                  }
              ]
          },
          {
              test:/\.(eot|woff2?|ttf|svg)$/,
              use:[
                  {
                      loader:'url-loader',
                      options:{
                          limit:1000,
                          useRelativePath:true
                      }
                  }
              ]
          }
      ]
  }
};
