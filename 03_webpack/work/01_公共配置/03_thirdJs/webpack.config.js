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
    plugins:[
        new webpack.ProvidePlugin({
            _:"lodash"
        })
    ]
}