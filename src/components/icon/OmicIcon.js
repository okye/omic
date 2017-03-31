import Omic from '../Omic'
import Icons from './Icons'

export default class OmicIcon extends Omic {
  constructor(data) {
    data = Object.assign({
      icon: '',
      align: ''
    }, data)
    super(data)
  }
  install() {
    if (Icons[this.data.icon]) {
      this.data.icon = Icons[this.data.icon]
    }
  }
  render() {
    return `{{if icon}} <i class='mdui-icon material-icons {{if align}}mdui-icon-{{align}}{{/if}} {{clazz}}' style='{{style}}'>{{icon}}</i> {{/if}}`
  }
}