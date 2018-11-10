var path = require("path");
var webpack = require("webpack");
module.exports={
    entry:`${__dirname}/app.js`,
    output:{
        path:path.resolve(__dirname,"dist"),
        filename: "index.js"
    },
    resolve:{
        alias:{
            lodash$:path.resolve(__dirname,"lib/lodash.js")
        }
    },
    module:{
      rules:[
          {
              test:/\.css$/,
              use:[
                      {
                          loader:"style-loader",
                          options:{
                              // insertInto:"#test",
                              singleton:true
                          }
                      },
                      {
                          loader:"css-loader",
                          options:{
                              modules:true
                          }
                      }
              ]
          }
      ]
    },
    plugins:[
        new webpack.ProvidePlugin({
            _:"lodash"
        })
    ]
}