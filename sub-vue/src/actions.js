function emptyAction() {
  // 警告：提示当前使用的是空 Action
  console.warn('Current execute action is empty!')
}

class Actions {
  initialState = {}
  // 默认值为空 Action
  actions = {
    onGlobalStateChange: emptyAction,
    setGlobalState: emptyAction,
    getGlobalState: emptyAction,
  }

  /**
   * 设置 actions
   */
  setActions(actions) {
    this.actions = actions
  }

  /**
   * 映射
   */
  onGlobalStateChange(...args) {
    return this.actions.onGlobalStateChange(...args)
  }

  /**
   * 映射
   */
  setGlobalState(...args) {
    return this.actions.setGlobalState(...args)
  }
  /**
   * 映射
   */
  getGlobalState() {
    return this.actions.initialState
  }
}

const actions = new Actions()
export default actions
