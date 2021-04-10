import { registerMicroApps, start } from 'qiankun'

registerMicroApps([
  {
    name: 'sub-umi',
    entry: '//localhost:1510',
    container: '#mfeContainer',
    activeRule: '/umi',
  },
  {
    name: 'sub-umi2',
    entry: '//localhost:1520',
    container: '#mfeContainer',
    activeRule: '/umi2',
  },
  {
    name: 'sub-vue',
    entry: '//localhost:1530',
    container: '#mfeContainer',
    activeRule: '/vue',
  },
  {
    name: 'sub-vue2',
    entry: '//localhost:1540',
    container: '#mfeContainer',
    activeRule: '/vue2',
  },
])

start()
