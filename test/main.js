import Omic from 'src/index'

class Hello extends Omic.Omic {
  constructor(data) {
    super(data)
  }
  install () {
  }
  installed () {
    var inst = new mdui.Fab('#fab')
    var fab = this.refs.fab
    fab.addEventListener('open.mdui.fab', function () {
      console.log('open')
    })
    fab.addEventListener('opened.mdui.fab', function () {
      console.log('opened')
    })
    fab.addEventListener('close.mdui.fab', function () {
      console.log('close')
    })
    fab.addEventListener('closed.mdui.fab', function () {
      console.log('closed')
    })
  }
  style () {
    return `
        h1{
            cursor:pointer;
        }
     `
  }
  handleClick(target, evt){
    mdui.alert(target.innerHTML);
  }
  handleChange (target) {
    console.log(target.value);
  }
  render() {
    return `
      <div>
        <h1 class='' onclick='handleClick(this, event)'>Hello ,{{name}}!</h1>
        <div class="mdui-container">
          <div class="mdui-fab-wrapper" ref="fab" id='fab'>
            <button class="mdui-fab mdui-ripple mdui-color-pink-accent">
              <i class="mdui-icon material-icons">&#xe145</i>
              <i class="mdui-icon mdui-fab-opened material-icons">&#xe254</i>
            </button>
            <div class="mdui-fab-dial">
              <button class="mdui-fab mdui-fab-mini mdui-ripple mdui-color-pink" onclick='handleClick(this, event)'><i class="mdui-icon material-icons">&#xe864</i></button>
              <button class="mdui-fab mdui-fab-mini mdui-ripple mdui-color-red" onclick='handleClick(this, event)'><i class="mdui-icon material-icons">&#xe866</i></button>
              <button class="mdui-fab mdui-fab-mini mdui-ripple mdui-color-orange" onclick='handleClick(this, event)'><i class="mdui-icon material-icons">&#xe191</i></button>
              <button class="mdui-fab mdui-fab-mini mdui-ripple mdui-color-blue" onclick='handleClick(this, event)'><i class="mdui-icon material-icons">&#xe913</i></button>
            </div>
          </div>
          <div>
            <omic-input data-label='用户名' data-floating='false' data-icon='access_alarm' onchange='handleChange' />
            <omic-input data-label='密码' data-type='password' data-icon='&#xe897;' data-floating='true' data-pattern="^.*(?=.{6,})(?=.*[a-z])(?=.*[A-Z]).*$" data-required='true' data-msg='密码至少 6 位，且包含大小写字母' onchange='handleChange' />
            <omic-input data-label='多行输入' data-icon='email' data-maxlength='100' data-floating='true' data-multiple='true'  data-pattern="^.*(?=.{6,})(?=.*[a-z])(?=.*[A-Z]).*$" data-required='true' data-msg='至少 6 位，且包含大小写字母' onchange='handleChange' />
          </div>
        </div>
    `
  }
}

Omi.render(new Hello({ name : 'Omi' }),'body')
