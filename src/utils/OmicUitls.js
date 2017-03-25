import Omic from './Omic'

export default {
  injectEvent (target) {
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
