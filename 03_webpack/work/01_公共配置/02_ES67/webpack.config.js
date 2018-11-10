var path = require("path");
module.exports={
    entry:`${__dirname}/app.js`,
    output:{
        path:path.resolve(__dirname,"dist"),
        filename: "index.js"
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:"babel-loader"
                },
                exclude:"/node_modules/"
            }
        ]
    }
}