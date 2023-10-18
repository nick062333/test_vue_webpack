// webpack.common.js
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
            }),
        new MiniCssExtractPlugin({
            filename:'style/[contenthash].css',
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
          },
            {
                test: /\.m?js$/,

                //排除已下Module
                exclude: /(node_modules|bower_components)/,

                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            },
            {
                test: /\.vue\.(s?[ac]ss)$/,
                oneOf: [
                  // 这里匹配 `<style module>`
                  {
                    resourceQuery: /module/,
                    use: [
                      'vue-style-loader',
                      {
                        loader: 'css-loader',
                        options: {
                          modules: {
                              localIdentName: '[local]_[hash:base64:5]'
                          },
                        }
                      }
                    ]
                  },
                  // 这里匹配普通的 `<style>` 或 `<style scoped>`
                  {
                    use: [
                      'vue-style-loader',
                      'css-loader'
                    ]
                  }
                ]
            },
            // SASS and CSS files (standalone):
            {
                test: /(?<!\.vue)\.(s?[ac]ss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
       ]
   }
}