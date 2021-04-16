module.exports = {
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
