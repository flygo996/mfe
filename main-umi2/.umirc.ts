import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: 'main-umi2',
  publicPath: '/p2/',
  base: '/p2',
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
          name: 'sub-vue',
          // entry: '//localhost:1530',
          entry: '//10.8.82.80:8080/vue1',
        },
        {
          name: 'sub-vue2',
          // entry: '//localhost:1540',
          entry: '//10.8.82.80:8080/vue2',
        },
        {
          name: 'sub-umi',
          // entry: '//localhost:1510', // local
          entry: '//10.8.82.80:8080/umi1', // 部署地址
        },
        {
          name: 'sub-umi2',
          // entry: '//localhost:1520',
          entry: '//10.8.82.80:8080/umi2',
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
