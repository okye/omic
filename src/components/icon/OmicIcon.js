import Omic from '../Omic'
import Icons from './Icons'

class OmicIcon extends Omic {
  constructor(data) {
    data = Object.assign ({
      icon: ''
    }, data)
    super(data)
  }
  install () {
    console.log(Icons[this.data.icon])
    if (Icons[this.data.icon]) {
     this.data.icon = Icons[this.data.icon]
    }
  }
  render () {
    return `
        {{if icon}} <i class='mdui-icon material-icons {{cssclass}}' style='{{style}}'>{{icon}}</i> {{/if}}
    `
  }
}

export default OmicIcon
