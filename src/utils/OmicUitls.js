import Omic from './Omic'

export default {
  injectEvent (target) {
    // 入参事件注册为本地事件
    if (target && target instanceof Omic) {
      let data = target.data
      for (let key in data) {
        if (key.indexOf('on')==0 && data[key] instanceof Function) {
          target[key] = data[key]
        }
      }
    }
  }
}
