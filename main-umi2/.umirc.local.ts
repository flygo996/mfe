import { defineConfig } from 'umi';

export default defineConfig({
  title: 'main-umi2-local',
  base: '/', // Default: '/'
  publicPath: '/', // Default: '/'
  qiankun: {
    master: {
      apps: [
        {
          name: 'sub-umi',
          entry: '//localhost:1510/umi1',
        },
        {
          name: 'sub-umi2',
          entry: '//localhost:1520/umi2',
        },
        {
          name: 'sub-vue',
          entry: '//localhost:1530/vue1',
        },
        {
          name: 'sub-vue2',
          entry: '//localhost:1540/vue2',
        },
      ],
    },
  },
});
