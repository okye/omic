import Omicx from '../Omicx'

export default class OmicContainer extends Omicx {
  constructor(data) {
    data = Object.assign({
      $__tag_closed_: false, //内部使用，标签是否闭合
      $__tag_self_: OmicContainer, //内部使用，未闭合标签需设定
      fluid: 'false'
    }, data)
    super(data)
  }
  render() {
    return `<div ref='OmicContainer-div-{{key}}' class='mdui-container{{if "true"===fluid}}-fluid{{/if}} {{clazz}}'>`
  }
}