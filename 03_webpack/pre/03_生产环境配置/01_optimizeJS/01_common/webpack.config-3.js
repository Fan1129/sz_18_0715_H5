const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
      A:"./src3/A.JS",
      B:"./src3/B.JS"
  },
  output: {
      path: path.resolve(__dirname, 'dist3'),
      filename: '[name].bundle.js'
  },
  plugins:[
      /*new webpack.optimize.CommonsChunkPlugin({
        names:["A","01_common"]
      }),*/



      new webpack.optimize.CommonsChunkPlugin({
          name:"A"
      }),
      new webpack.optimize.CommonsChunkPlugin({
          name:"common"
      }),
      /* new webpack.optimize.CommonsChunkPlugin({
           name:"webpackCommon",
           minChunks:Infinity
       })*/

  ]
};
