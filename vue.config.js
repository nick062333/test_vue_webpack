const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true
  // chainWebpack: (config) => {
  //   // 添加一个自定义 Loader
  //   config.module
  //     .rule('vue')
  //     .test(/\.vue$/)
  //     .use()
  //     .loader('vue-loader')
  //     .end()

  //     // 它会应用到普通的 `.js` 文件
  //     // 以及 `.vue` 文件中的 `<script>` 块
  //     .rule('script')
  //     .test(/\.js$/)
  //     .use()
  //     .loader('babel-loader')
  //     .end()

  //     .rule('css')
  //     .test(/\.css$/)
  //     .use('css-loader')
  //       .loader()
  //       .options({
  //         modules: true,
  //         localIdentName:'[local]_[hash:base64:8]'
  //       })

  //       .end();

  // },
  // devServer: {
  //   proxy: 'http://localhost',
  //   port: 8080
  // }
})
