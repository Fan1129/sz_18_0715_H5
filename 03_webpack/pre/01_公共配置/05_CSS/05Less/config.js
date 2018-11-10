const path = require('path');
module.exports = {
  entry: {
      app:"./05Less/app.js"
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
                      loader:'less-loader',
                  }
              ]
          }
      ]
  }
};
