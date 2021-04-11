import { defineConfig } from 'umi'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: 'sub-umi',
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
