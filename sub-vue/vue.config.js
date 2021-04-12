module.exports = {
  // publicPath: 'http://localhost:1530/',
  publicPath: '/vue1', // 本地'/'，qiankun'/vue2'
  configureWebpack: {
    output: {
      library: 'sub-vue',
      jsonpFunction: `webpackJsonp_sub-vue`,
      libraryTarget: 'umd',
    },
  },
  devServer: {
    port: 1530,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      '/api': {
        target: 'http://localhost:2000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/',
        },
      },
    },
  },
}
