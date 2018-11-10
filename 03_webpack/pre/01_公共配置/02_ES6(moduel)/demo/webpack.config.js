const path = require("path")
console.log(__dirname)
// module.exports = {
// //     entry: {
// //         app:path.join(__dirname,"app.js")
// //     },
// //     output: {
// //         filename: 'app.js',
// //         path: path.resolve(__dirname, 'dist')
// //     }
// // };
module.exports = {
    entry: {
        app:"./app.js"
    },
    output: {
        filename: './dist/app.js'
    }
};
