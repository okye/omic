import Omicx from '../Omicx'

export default class OmicCol extends Omicx {
  constructor(data) {
    data = Object.assign({
      $__tag_closed_: false, //内部使用，标签是否闭合
      $__tag_self_: OmicCol, //内部使用，未闭合标签需设定
    }, data)
    super(data)
  }
  render() {
    return `<div ref='OmicCol-div-{{key}}' class='mdui-col-xs-4 {{clazz}}'>`
  }
}