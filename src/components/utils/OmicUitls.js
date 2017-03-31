import Omic from '../Omic'

export default {
  injectEvent(target) {
    if (target && target instanceof Omic) {
      let data = target.data
      for (let key in data) {
        if (key.indexOf('on') == 0 && data[key] instanceof Function) {
          target[key] = data[key]
        }
      }
    }
  },
  injectEndTag(target) {
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