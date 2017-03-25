import Omi from 'omi'

import '../3rd/mdui@v0.1.2/css/mdui.css'
import '../3rd/mdui@v0.1.2/js/mdui.js'
import '../css/index.less'

import OmicUitls from './utils/OmicUitls'

class Omic extends Omi.Component {
  constructor (data) {
    //构造函数
    let key = Math.round(10000000000000000 * Math.random()) //随机数，组件唯一标识
    data = Object.assign ({
        key: key,
        id: 'OmicInput-' + key,
        name: 'OmicInput-' + key,
        cssclass: '',
        style: '',
        disabled: ''
    }, data);
    super(data)
    OmicUitls.injectEvent(this)
  }
  install () {} //初始化安装，传入数据处理
  installed () {} //安装完成，HTML插入页面后执行
  uninstall () {} //卸载，执行remove时触发
  beforeUpdate () {} //更新前
  afterUpdate () {} //更新后
  style () {} //样式
  render () {} //内容
  makeHTML (name, ctor) {
    Omi.makeHTML(name, ctor)
  }
}

export default Omic
