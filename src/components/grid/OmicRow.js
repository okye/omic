import Omicx from '../Omicx'

export default class OmicRow extends Omicx {
  constructor(data) {
    data = Object.assign({
      $__tag_closed_: false, //内部使用，标签是否闭合
      $__tag_self_: OmicRow, //内部使用，未闭合标签需设定
    }, data)
    super(data)
  }
  render() {
    return `<div ref='OmicRow-div-{{key}}' class='mdui-row {{clazz}}'>`
  }
}