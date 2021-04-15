// 参考：https://github.com/umijs/qiankun/blob/master/examples/main/index.js
import {
  registerMicroApps,
  start,
  setDefaultMountApp,
  runAfterFirstMounted,
  initGlobalState,
} from 'qiankun'

registerMicroApps(
  [
    {
      name: 'sub-umi',
      // entry: '//localhost:1510',
      entry: '//10.8.82.80:8080/umi1',
      container: '#mfeContainer',
      activeRule: '/umi1',
    },
    {
      name: 'sub-umi2',
      // entry: '//localhost:1520',
      entry: '//10.8.82.80:8080/umi2',
      container: '#mfeContainer',
      activeRule: '/umi2',
    },
    {
      name: 'sub-vue',
      // entry: '//localhost:1530',
      entry: '//10.8.82.80:8080/vue1',
      container: '#mfeContainer',
      activeRule: '/vue1',
    },
    {
      name: 'sub-vue2',
      // entry: '//localhost:1540',
      entry: '//10.8.82.80:8080/vue2',
      container: '#mfeContainer',
      activeRule: '/vue2',
    },
  ],
  {
    beforeLoad: [
      (app): any => {
        console.log('%c[LifeCycle] before load %s', 'color: green;', app.name)
      },
    ],
    beforeMount: [
      (app): any => {
        console.log('%c[LifeCycle] before mount %s', 'color: green;', app.name)
      },
    ],
    afterMount: [
      (app): any => {
        console.log('%c[LifeCycle] after mount %s', 'color: green;', app.name)
      },
    ],
    beforeUnmount: [
      (app): any => {
        console.log(
          '%c[LifeCycle] before unmount %s',
          'color: green;',
          app.name,
        )
      },
    ],
    afterUnmount: [
      (app): any => {
        console.log('%c[LifeCycle] after unmount %s', 'color: green;', app.name)
      },
    ],
  },
)

const { onGlobalStateChange, setGlobalState } = initGlobalState({
  user: 'qiankun',
})

onGlobalStateChange((value, prev) =>
  console.log('[onGlobalStateChange - master]:', value, prev),
)

setGlobalState({
  ignore: 'master',
  user: {
    name: 'master',
  },
})

/**
 * Step3 设置默认进入的子应用
 */
setDefaultMountApp('/vue2') // 如果不设置，会默认去 '/'，设置了就会去 '/vue2'

/**
 * Step4 启动应用
 */
start()

runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted')
})
