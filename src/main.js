import Omi from 'omi'
import './css/index.less'
import './3rd/mdui@v0.1.2/js/mdui.js'

class Hello extends Omi.Component {
  constructor(data) {
    super(data)
  }
  install () {
  }
  tick () {
  }
  installed () {
    var inst = new mdui.Fab('#fab')
    this.refs.open.addEventListener('click', function () {
      inst.open()
    })
    this.refs.close.addEventListener('click', function () {
      inst.close()
    })
    this.refs.toggle.addEventListener('click', function () {
      inst.toggle()
    })
    this.refs.hide.addEventListener('click', function () {
      inst.hide()
    })
    this.refs.show.addEventListener('click', function () {
      inst.show()
    })
    this.refs.getState.addEventListener('click', function () {
      mdui.alert(inst.getState())
    })
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
    console.log(JSON.stringify(this.refs))
  }
  uninstall () {
  }
  beforeUpdate () {
  }
  afterUpdate () {
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
  render() {
    return `
      <div>
        <h1 class='' onclick='handleClick(this, event)'>Hello ,{{name}}!</h1>
        <i class="mdui-icon material-icons">&#xe834;</i>
        <i class="mdui-icon material-icons mdui-text-color-red">&#xe834;</i>
        <i class="mdui-icon material-icons mdui-text-color-theme">&#xe834;</i>
        <div class="mdui-container">
          <button ref="open" class="mdui-btn mdui-color-pink-accent mdui-m-a-1">open</button>
          <button ref="close" class="mdui-btn mdui-color-pink-accent mdui-m-a-1">close</button>
          <button ref="toggle" class="mdui-btn mdui-color-pink-accent mdui-m-a-1">toggle</button>
          <button ref="hide" class="mdui-btn mdui-color-pink-accent mdui-m-a-1">hide</button>
          <button ref="show" class="mdui-btn mdui-color-pink-accent mdui-m-a-1">show</button>
          <button ref="getState" class="mdui-btn mdui-color-pink-accent mdui-m-a-1">getState</button>
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
        </div>
    `
  }
}

Omi.render(new Hello({ name : 'Omi' }),'#app')
