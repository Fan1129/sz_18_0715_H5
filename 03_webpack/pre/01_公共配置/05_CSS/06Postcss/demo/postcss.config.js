const autoprefixer = require("autoprefixer");
const autoImport = require("postcss-import");
const cssnano = require("cssnano");

module.exports={
    plugins:[
        autoImport,
        autoprefixer({
            browsers:["> 0%"]
        }),
        cssnano
    ]
}