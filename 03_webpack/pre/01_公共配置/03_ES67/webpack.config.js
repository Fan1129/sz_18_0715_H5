const path = require('path');

module.exports = {
  entry: {
    app:"./app.js"
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
      rules:[
          {
              test:/\.js$/,
              use:'babel-loader',
              exclude:'/node_modules/'
           }
    ]
  }
};
