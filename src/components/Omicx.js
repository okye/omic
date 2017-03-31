import Omic from './Omic'

import OmicUitls from './utils/OmicUitls'

export default class Omicx extends Omic {
  constructor(data) {
    data = Object.assign({
      $__tag_closed_: false, //内部使用，标签是否闭合
      $__tag_self_: Omicx //内部使用，未闭合标签需设定
    }, data)
    super(data)
  }
  beforeRender() {
    //渲染内容前调用,非自闭合标签需先执行super.beforeRender()
    OmicUitls.injectEndTag(this) // 闭合兄弟层div
  }
}