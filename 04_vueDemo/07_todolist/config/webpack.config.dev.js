const webpack = require('webpack');
module.exports={
    devServer:{
        port:3333,
        hot:true,
        hotOnly:true,
        overlay:true
    },
    devtool:'inline-source-map',
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
    ]
}