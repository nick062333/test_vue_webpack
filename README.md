# my-project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### install vue

vue create hello-world

html-webpack-plugin doc
https://github.com/jantimon/html-webpack-plugin

__dirname: 总是返回被执行的 js 所在文件夹的绝对路径
__filename: 总是返回被执行的 js 的绝对路径
process.cwd(): 总是返回运行 node 命令时所在的文件夹的绝对路径

### install webpack

"file-loader": "^6.2.0",
"html-webpack-plugin": "^5.5.3",

入口設定
https://webpack.docschina.org/configuration/entry-context/#entry

BASE_URL
https://cli.vuejs.org/zh/guide/html-and-static-assets.html#%E6%8F%92%E5%80%BC

環境變量
https://cli.vuejs.org/zh/guide/mode-and-env.html#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F

絕對路徑
https://cli.vuejs.org/zh/config/#publicpath

### install  babel-loader

```
npm install -D babel-loader @babel/core @babel/preset-env webpack
npm i @babel/plugin-transform-runtime
```


### css打包

```
npm install --save-dev css-loader
npm i vue-style-loader
npm i css-loader
npm i mini-css-extract-plugin
```



### webpack use env file

```
npm i dotenv
```