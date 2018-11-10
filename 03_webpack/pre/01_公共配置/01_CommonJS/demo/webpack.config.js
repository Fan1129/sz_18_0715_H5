const path = require("path")
module.exports = {
    entry: './app.js',
    output: {
        filename: 'tai.js',
        path: path.resolve(__dirname, 'dist2')
    }
};
