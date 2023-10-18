// webpack.common.js
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const webpack = require('webpack')
const path = require('path');

const dotenv = require('dotenv')

//parsed包含包含加載內容的鍵或error失敗時的鍵
const env = dotenv.config({ path:'../.env'}).parsed
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next])
  return prev
}, {})

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
            }),
        new webpack.DefinePlugin(envKeys)
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
                        process.env.NODE_ENV !== 'production'
                        ? 'vue-style-loader'
                        : MiniCssExtractPlugin.loader,
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