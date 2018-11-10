const path = require('path');

module.exports = {
  entry: {
      app:"./app.js"
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
              test:/\.(png|jpg|jpeg|gif)$/,
              use:[
                  {
                      loader:'url-loader',
                      options:{
                          limit:10000,
                          useRelativePath:true
                      }
                  },
                  {
                      loader: 'img-loader',
                      options: {
                          plugins: [
                              require('imagemin-gifsicle')({}),
                              require('imagemin-mozjpeg')({
                                  quality:10
                              }),
                              require('imagemin-optipng')({}),
                              require('imagemin-svgo')({})
                          ]
                      }
                  }
              ]
          }

      ]
  }
};
