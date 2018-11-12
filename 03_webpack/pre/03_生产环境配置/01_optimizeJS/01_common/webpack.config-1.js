const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
      A:"./src/A.JS",
  },
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js'
  },
  plugins:[
      new webpack.optimize.CommonsChunkPlugin({
          name:"common"
      })
  ]
};
