import Omicx from '../Omicx'

export default class OmicRow extends Omicx {
  constructor(data) {
    data = Object.assign({
      $__tag_closed_: false, //内部使用，标签是否闭合
      $__tag_self_: OmicRow, //内部使用，未闭合标签需设定
      gapless: 'false', //消除列间距
      xs: 0, //等分1-12，>0
      sm: 0, //等分1-12，>600px
      md: 0, //等分1-12，>1024px
      lg: 0, //等分1-12，>1440px
      xl: 0 //等分1-12，>1920px
    }, data)
    super(data)
  }
  render() {
    return `<div ref='OmicRow-div-{{key}}'
      class='mdui-row{{if "true"===gapless}}mdui-row-gapless{{/if}}
      {{if xs > 0 && xs <= 12}}mdui-row-xs-{{xs}}{{/if}}
      {{if sm > 0 && sm <= 12}}mdui-row-sm-{{sm}}{{/if}}
      {{if md > 0 && md <= 12}}mdui-row-md-{{md}}{{/if}}
      {{if lg > 0 && lg <= 12}}mdui-row-lg-{{lg}}{{/if}}
      {{if xl > 0 && xl <= 12}}mdui-row-xl-{{xl}}{{/if}} {{clazz}}'
      style='{{style}}'
    >`
  }
}