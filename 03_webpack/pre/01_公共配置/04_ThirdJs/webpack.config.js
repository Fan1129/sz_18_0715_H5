const path = require('path');
const webapck = require("webpack");
module.exports = {
    entry: {
        app:"./app.js"
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    /*resolve:{
        alias:{
            jquery$:path.resolve(__dirname,"jq/jquery.js")
        }
    },*/
    module:{
        rules:[
            {
                test:path.resolve(__dirname,'app.js'),//必须指定到使用的模块
                use:[
                    {
                        loader:"imports-loader",
                        options:{
                            $:'jquery'
                        }
                    }
                ]
            }
        ]
    },
    // plugins:[
    //     new webapck.ProvidePlugin({
    //         $:'jquery'
    //     })
    // ]

};
