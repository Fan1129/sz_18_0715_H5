const path = require('path');
module.exports = {
  entry: {
      app:"./06Postcss/app.js"
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
                      loader:'css-loader',
                  },
                  {
                      loader:'postcss-loader',
                      options:{
                          ident:'postcss',
                          plugins:[
                            require('autoprefixer')(),
                            require('cssnano')(),
                          ]
                      }
                  },
                  {
                      loader:'less-loader',
                  }
              ]
          }
      ]
  }
};
