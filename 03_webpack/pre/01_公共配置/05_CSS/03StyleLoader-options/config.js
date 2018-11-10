const path = require('path');
module.exports = {
  entry: {
      //app属性对应的路径是参照于webpack命令的运行目录的
      app:"./03StyleLoader-options/app.js"
  },
  output: {
      // path属性需要得是一个绝对路径
      // path:"dist",
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js'
  },
  module:{
      rules:[
          {
              test:/\.css/,
              use:[
                  {
                      loader:'style-loader',
                      options:{
                          insertInto:'#test',
                          singleton:false,
                          transform:"./03StyleLoader-options/transform.js"
                      }
                  },
                  {
                      loader:'less-loader',
                  }
              ]
          }
      ]
  }
};
