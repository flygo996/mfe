import { defineConfig } from 'umi'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: 'sub-umi',
  // publicPath: '/umi1/',
  // base: '/umi1/',
  base: '/umi1/', // 因为是history模式，所以自己玩的时候可以是'/'，但是乾坤接入的时候需要router base为'/umi1/，为了统一可以直接设置为'/umi1/'
  history: {
    type: 'browser',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/Index' },
        { path: '/a', component: '@/pages/A' },
        { path: '/b', component: '@/pages/B' },
      ],
    },
  ],
  qiankun: {
    slave: {},
  },
  devServer: {
    port: 1510,
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
  fastRefresh: {},
})
