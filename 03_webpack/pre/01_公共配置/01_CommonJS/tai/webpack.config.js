const path = require('path');
console.log(__dirname)
console.log(path.resolve(__dirname, 'dist'))
module.exports = {
    entry: './taiUi/tai.js',
    output: {
        filename: 'tai.js',
        path: path.resolve(__dirname, 'dist')
    }
};
