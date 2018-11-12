const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
      A:"./src4/A.JS",
      B:"./src4/B.JS",
      third:"jquery",
      third2:"lodash"
  },
  output: {
      path: path.resolve(__dirname, 'dist4'),
      filename: '[name].bundle.js'
  },
  /*plugins:[
      new webpack.optimize.CommonsChunkPlugin({
          name:"01_common",
          chunks:["A","B"]
      }),
      new webpack.optimize.CommonsChunkPlugin({
          name:"third"
      }),
      new webpack.optimize.CommonsChunkPlugin({
          name:"webpackCommon",
          minChunks:Infinity
      })
  ]*/
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            names:["common","third","third2"]
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:"webpackCommon",
            minChunks:Infinity
        })
    ]
       /* plugins:[
            new webpack.optimize.CommonsChunkPlugin({
                names:["third","01_common"]
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name:"webpackCommon",
                minChunks:Infinity
            })
        ]*/
};
