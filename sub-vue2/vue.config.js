module.exports = {
  publicPath: 'http://localhost:1540/',
  // publicPath: '/',
  configureWebpack: {
    output: {
      library: 'sub-vue2',
      jsonpFunction: `webpackJsonp_sub-vue2`,
      libraryTarget: 'umd',
    },
  },
  devServer: {
    port: 1540,
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
