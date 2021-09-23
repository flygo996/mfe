import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: 'main-umi2',
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
  dva: { hmr: true },
  qiankun: {
    master: {
      apps: [
        {
          name: 'sub-umi',
          entry: '//localhost:1510',
        },
        {
          name: 'sub-umi2',
          entry: '//localhost:1520',
        },
        {
          name: 'sub-vue',
          entry: '//localhost:1530',
        },
        {
          name: 'sub-vue2',
          entry: '//localhost:1540',
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
