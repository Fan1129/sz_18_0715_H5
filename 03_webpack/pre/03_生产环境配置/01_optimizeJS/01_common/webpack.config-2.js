const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
      A:"./src/A.JS",
      B:"./src/B.JS"
  },
  output: {
      path: path.resolve(__dirname, 'dist2'),
      filename: '[name].bundle.js'
  },
  plugins:[
      new webpack.optimize.CommonsChunkPlugin({
          name:"common",
          minChunks:2
      })
  ]
};
