// webpack.common.js
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
//   context: path.resolve(__dirname, ''),

  entry : {
    home: './src/index.js'
  },
  output: {
      filename: '[name].bundle.js', // 根據 entry 的 key name 決定name
      path: path.resolve(__dirname, 'dist'),
  },
   // 新增
   plugins: [
    new VueLoaderPlugin(), 
    new HtmlWebpackPlugin(
            { 
                template : './index.html',
                // publicPath: './dist/',
                favicon:'./public/favicon.ico',
                filename:'home.html'
            })
    ],
    
   // ...
   
   module: {
       rules: [
       // 新增 rules
           {
               test: /\.vue$/,
               loader: 'vue-loader',
           },
           {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          }
       ]
   }
}