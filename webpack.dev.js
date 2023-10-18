// webpack.dev.js

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, { // 合併 webpack.common.js 的設定
  mode: 'development',
  entry:{
    app: ['./src/index.js'],
  },
  plugins:[],
  output : {}
});