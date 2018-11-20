const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require("webpack-merge");
const devCofig = require("./webpack.config.dev");
const proCofig = require("./webpack.config.pro");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')



const baseConfig = (env)=>{
    const eslintLoader = [
        {
            loader:"eslint-loader",
            options:{
                formatter:require("eslint-friendly-formatter")
            }
        }
    ];
    const jsLoader = [{loader:"babel-loader"}].concat(env==="dev"?eslintLoader:[]);

    const cssLoader = [
        {
        loader:"css-loader"
        },
        {
            loader:"postcss-loader"
        },
        {
            loader:"less-loader"
        }
    ];
    const styleLoader = [
        {
            loader:"style-loader"
        }
    ];
    const extractObj = {
        fallback:{
            loader:"style-loader",
            options:{
                singleton:true
            }
        },
        use:cssLoader
    };
    const lessLoader =  env==="dev"?styleLoader.concat(cssLoader):ExtractTextWebpackPlugin.extract(extractObj);

    const imageWebpackLoader = [ {
        loader: 'image-webpack-loader',
    }]
    const imgLoader = [
        {
            loader:"url-loader",
            options:{
                limit:10000,
                name:"[name].[ext]",
                outputPath:"img"
            }
        }
    ].concat(env === "dev"?[]:imageWebpackLoader)


    const filename = env === "dev"?"index.js":`[name].[chunkhash:8].js`

    var devEntry ={
        tai:`${__dirname}/../src/app.js`,
    }
    var proEntry ={
        tai:`${__dirname}/../src/app.js`,
        vender:["jquery"]
    }

    return {
        entry:env==="dev"?devEntry:proEntry,
        output:{
            path:path.resolve(__dirname,"../dist"),
            filename,
            chunkFilename:"[name].[chunkhash]-chunk.js"
        },
        resolve:{
            alias:{
                vue$:path.resolve(__dirname,"../node_modules/vue/dist/vue.esm.js")
            }
        },
        module:{
            rules:[
                {
                    test:/\.vue$/,
                    use:[
                        {loader:"vue-loader"}
                    ]
                },
                {
                    test:/\.js$/,
                    use:jsLoader
                },
                {
                    test:/\.less/,
                    use:lessLoader
                },
                {
                    test:/\.(jpg|jpeg|png|gif)$/,
                    use:imgLoader
                },
                {
                    test:/\.html$/,
                    use:[
                        {
                            loader:"html-loader",
                            options:{
                                attrs:["img:src"],
                                minimize: env === "pro"
                            }
                        }
                    ]
                }
            ]
        },
        plugins:[
            new VueLoaderPlugin(),
            new htmlWebpackPlugin({
                template:`${__dirname}/../src/index.html`,
                filename:"index.html"
            }),
            new CopyWebpackPlugin([{ from: `${__dirname}/../src/static`, to: `${__dirname}/../dist/static` }])
        ]
    }
}



module.exports=(env)=>{
    const config = env==="dev"?devCofig:proCofig;
    const result = merge(config,baseConfig(env));
    return result
}