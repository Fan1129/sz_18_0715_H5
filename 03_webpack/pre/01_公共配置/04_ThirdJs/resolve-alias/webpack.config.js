const path = require('path');
module.exports = {
    entry: {
        app:"./app.js"
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve:{
        alias: {
            damu$: path.resolve(__dirname, 'src/damu/damu.js'),
        }
    }
};
