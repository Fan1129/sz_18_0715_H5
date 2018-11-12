const path = require('path');
const webpack = require("webpack");

module.exports = {
    entry: {
        A:"./app.js",
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:'babel-loader',
                exclude:'/node_modules/'
            }
        ]
    },
    // mode: "development"
    plugins:[
        new webpack.optimize.UglifyJsPlugin()
    ]
};