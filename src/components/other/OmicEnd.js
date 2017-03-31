import Omic from '../Omic'

export default class OmicEnd extends Omic {
  constructor(data) {
    data = Object.assign({
      $__all_closed_: true
    }, data)
    super(data)
  }
  beforeRender() {
    let sbilings = this.parent.children
    let len = sbilings.length
    for (var i = len - 1; i > 0; i--) {
      let t = sbilings[i]
      if (!t.data.$__tag_closed_) {
        t.data.$__tag_closed_ = true
        this.data.$__all_closed_ = false
        break
      }
    }
  }
  render() {
    return `{{if !$__all_closed_}}</div>{{/if}}`
  }
}