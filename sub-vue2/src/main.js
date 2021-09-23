import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router'
import actions from './actions'
import './public-path'

Vue.use(VueRouter)
Vue.config.productionTip = false

let router = null
let instance = null

function render(props = {}) {
  const { container } = props
  console.log(process.env, window.__POWERED_BY_QIANKUN__)
  router = new VueRouter({
    mode: 'history',
    base: window.__POWERED_BY_QIANKUN__ ? '/vue2' : '/', // '/vue2' 与主项目里面的激活路由一致！
    routes,
  })
  // console.log('router:', router)
  // console.log('router.options:', JSON.stringify(router.options, null, 2))
  instance = new Vue({
    router,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app')
}
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

// eslint-disable-next-line no-undef
console.log('__webpack_public_path__:', __webpack_public_path__) // '/'

export async function bootstrap(props) {
  console.log('bootstrap 函数: ', props)
}
// props默认会有 onGlobalStateChange 和 setGlobalState 两个api
export async function mount(props) {
  console.log('mount 函数: ', props)
  actions.setActions(props)
  render(props)
}
export async function unmount(props) {
  console.log('unmount函数:', props)
  instance.$destroy()
  instance = null
  router = null
}
