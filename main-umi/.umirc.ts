import { defineConfig } from 'umi'

const { IS_LOCAL } = process.env
console.log('main-umi IS_LOCAL:', IS_LOCAL)

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: 'main-umi',
  base: IS_LOCAL ? '/' : '/p1/', // Default: '/'
  publicPath: IS_LOCAL ? '/' : '/p1/', // Default: '/'
  history: {
    type: 'browser',
  },
  define: {
    mfeApps: [
      {
        name: 'sub-umi',
        entry: IS_LOCAL ? '//localhost:1510/umi1/' : '//10.8.82.80:2500/umi1/',
        container: '#mfeContainer',
        activeRule: '/umi1',
      },
      {
        name: 'sub-umi2',
        entry: IS_LOCAL ? '//localhost:1520/umi2/' : '//10.8.82.80:2500/umi2/',
        container: '#mfeContainer',
        activeRule: '/umi2',
      },
      {
        name: 'sub-vue',
        entry: IS_LOCAL ? '//localhost:1530/vue1/' : '//10.8.82.80:2500/vue1/',
        container: '#mfeContainer',
        activeRule: '/vue1',
      },
      {
        name: 'sub-vue2',
        entry: IS_LOCAL ? '//localhost:1540/vue2/' : '//10.8.82.80:2500/vue2/',
        container: '#mfeContainer',
        activeRule: '/vue2',
      },
    ],
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
