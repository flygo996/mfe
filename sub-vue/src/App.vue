<template>
  <div id="app">
    <div id="nav">
      <button @click="add">count add 1</button> |
      <button @click="add2">count add 1</button>
      <div>{{ globalState }}</div>
      <button @click="send">发送打印信息</button> |
      <h2>sub-vue 项目</h2>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import actions from './actions'
import qiankun from './qiankun'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['globalState']),
  },
  mounted () {
    console.log(actions)
    console.log(actions.initialState)
    console.log(actions.masterState)
    //
    console.log(qiankun)
    console.log(qiankun.masterState)
  },
  methods: {
    add () {
      actions.setGlobalState({
        count: this.globalState.count + 1, // 只用写这个属性就行，其他属性会保留
      })
    },
    add2 () {
      qiankun.setMasterState({
        ...qiankun.masterState,
        count: qiankun.masterState.count + 1,
      })
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
