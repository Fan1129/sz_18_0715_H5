const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
      A:"./src/A.JS",
  },
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
      publicPath:"./dist/",
      chunkFilename:'[name].chunk.js',
  },
  plugins:[
      new webpack.optimize.CommonsChunkPlugin({
          name:"common"
      }),
      new webpack.optimize.CommonsChunkPlugin({
          async:"async-01_common",
          children:true,
          minChunks:2
      })
  ]
};
