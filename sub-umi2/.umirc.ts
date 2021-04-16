import { defineConfig } from 'umi'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: 'sub-umi2',
  // publicPath: '/umi2/',
  // base: '/umi2/',
  base: '/', // 因为是hash模式，不管是自己玩还是qiankun子应用，都可以直接设置为'/'(history模式不行，见sub-umi1项目)
  history: {
    type: 'hash',
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
    port: 1520,
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
