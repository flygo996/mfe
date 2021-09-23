export const qiankun = {
  async bootstrap(props: Record<string, any>) {
    console.log('UMI111---bootstrap 函数: ', props)
  },
  // props默认会有 onGlobalStateChange 和 setGlobalState 两个api
  // 我们自己封装增加了一个api: getGlobalState
  async mount(props: Record<string, any>) {
    console.log('UMI111---mount 函数: ', props)
  },
  async unmount(props: Record<string, any>) {
    console.log('UMI111---unmount函数:', props)
  },
}
