import { defineConfig } from 'umi'

export default defineConfig({
  title: 'main-umi1-local',
  base: '/', // Default: '/'
  publicPath: '/', // Default: '/'
  define: {
    mfeApps: [
      {
        name: 'sub-umi',
        entry: '//localhost:1510/umi1',
        container: '#mfeContainer',
        activeRule: '/umi1',
      },
      {
        name: 'sub-umi2',
        entry: '//localhost:1520/umi2',
        container: '#mfeContainer',
        activeRule: '/umi2',
      },
      {
        name: 'sub-vue',
        entry: '//localhost:1530/vue1',
        container: '#mfeContainer',
        activeRule: '/vue1',
      },
      {
        name: 'sub-vue2',
        entry: '//localhost:1540/vue2',
        container: '#mfeContainer',
        activeRule: '/vue2',
      },
    ],
  },
})
