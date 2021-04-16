import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: 'main-umi2',
  base: '/p2/', // Default: '/'
  publicPath: '/p2/', // Default: '/'
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
        // 配置子项目
        {
          path: '/umi1',
          microApp: 'sub-umi',
        },
        {
          path: '/umi2',
          microApp: 'sub-umi2',
        },
        {
          path: '/vue1',
          microApp: 'sub-vue',
        },
        {
          path: '/vue2',
          microApp: 'sub-vue2',
        },
      ],
    },
  ],
  qiankun: {
    master: {
      apps: [
        {
          name: 'sub-umi',
          entry: '//10.8.82.80:8080/umi1',
        },
        {
          name: 'sub-umi2',
          entry: '//10.8.82.80:8080/umi2',
        },
        {
          name: 'sub-vue',
          entry: '//10.8.82.80:8080/vue1',
        },
        {
          name: 'sub-vue2',
          entry: '//10.8.82.80:8080/vue2',
        },
      ],
    },
  },
  devServer: {
    port: 1400,
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
});
