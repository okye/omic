import Omic from '../Omic'

export default class OmicDivider extends Omic {
  constructor(data) {
    data = Object.assign({
      inset: 'false',
      theme: ''
    }, data)
    if ('light|dark'.indexOf(data.theme) < 0) {
      data.theme = ''
    }
    super(data)
  }
  render() {
    return `<div class='mdui-divider{{if "true" === inset}}-inset{{/if}}{{if theme}}-{{theme}}{{/if}}'></div>`
  }
}