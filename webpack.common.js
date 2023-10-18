// webpack.common.js
const { VueLoaderPlugin } = require('vue-loader')

const path = require('path');

module.exports = {
  entry : {},
  output: {
      filename: '[name].bundle.js', // 根據 entry 的 key name 決定name
      path: path.resolve(__dirname, 'build'),
  },
   // 新增
   plugins: [ new VueLoaderPlugin() ],
    
   // ...
   
   module: {
       rules: [
       // 新增 rules
           {
               test: /\.vue$/,
               loader: 'vue-loader',
           },
       ]
   }
}