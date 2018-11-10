const path = require('path');
console.log(__dirname)
console.log(path.resolve(__dirname, 'dist'))
module.exports = {
    entry: {
        tai:"./taiUi/tai.js"
    },
    output: {
        filename: '[name].[hash:8].js',
        path: path.resolve(__dirname, 'dist')
    }
};
