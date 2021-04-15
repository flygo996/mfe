import { defineConfig } from 'umi'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: 'main-umi',
  publicPath: '/p1/',
  base: '/p1',
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/Index' },
        { path: '/a', component: '@/pages/A' },
        { path: '/b', component: '@/pages/B' },
        // 配置子项目
        {
          path: '/umi',
          microApp: 'sub-umi',
        },
        {
          path: '/umi2',
          microApp: 'sub-umi2',
        },
        {
          path: '/vue',
          microApp: 'sub-vue',
        },
        {
          path: '/vue2',
          microApp: 'sub-vue2',
        },
      ],
    },
  ],

  devServer: {
    port: 1300,
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
