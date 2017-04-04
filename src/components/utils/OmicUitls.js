import Omic from '../Omic'

export default {
  copyEvent(target) {
    // data中事件方法copy到组件
    if (target && target instanceof Omic) {
      let data = target.data
      for (let key in data) {
        if (data.hasOwnProperty(key) &&
          key.indexOf('on') === 0 &&
          data[key] instanceof Function) {
          target[key] = data[key]
        }
      }
    }
  },
  injectEndTag(target) {
    // 插入</div>
    if (!target.data.$__tag_closed_) {
      let sbilings = target.parent.children
      let len = sbilings.length
      for (var i = len - 2; i > 0; i--) {
        let t = sbilings[i]
        if (!t.data.$__tag_closed_) {
          if (t instanceof target.data.$__tag_self_) {
            t.data.$__tag_closed_ = true
            let old = target.render;
            target.render = function () {
              return `</div>` + old()
            }
          }
          break
        }
      }
    }
  }
}