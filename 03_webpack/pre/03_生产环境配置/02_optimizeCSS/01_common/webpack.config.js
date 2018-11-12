const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
      A:"./app.js",
  },
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
      chunkFilename:'[name].bundle.js'
  },
  module:{
        rules:[
            {
                test:/\.less/,
                use:ExtractTextWebpackPlugin.extract({
                    fallback: {
                        loader:'style-loader'
                    },
                    use:[
                        {
                            loader:'css-loader',
                        },
                        {
                            loader:'postcss-loader',
                            options:{
                                ident:'postcss',
                                plugins:[
                                    require('autoprefixer')(),
                                    // require('cssnano')(),
                                ]
                            }
                        },
                        {
                            loader:'less-loader',
                        }
                    ]
                })
            }
        ]
   },
  plugins:[
      new ExtractTextWebpackPlugin({
          filename:'[name].min.css',
          allChunks:false
      }),
      new HtmlWebpackPlugin({
          filename:"index.html",
          template:"./index.html"
      })
  ]
};
