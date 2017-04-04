import Omic from '../Omic'
import OmicIcon from '../icon/OmicIcon'

export default class OmicInput extends Omic {
  constructor(data) {
    data = Object.assign({
      value: '',
      type: 'text',
      label: null,
      icon: null,
      multiple: false,
      maxlength: null,
      placeholder: null,
      floating: false,
      required: false,
      pattern: null,
      msg: null
    }, data)
    super(data)
  }
  install() {
    super.$makeHTML('omic-icon', OmicIcon)
  }
  installed() {
    if (this.data.pattern) {
      this.refs['OmicInput-input-' + this.data.key].pattern = this.data.pattern
    }
  }
  style() {
    return `
      .icon-middle {
        top: 36%;
      }
    `
  }
  handleChange(target, event) {
    this.data.value = target.value
    if (this.onchange) {
      this.onchange(target, event, this.data)
    }
  }
  handleBlur(target, event) {
    if (this.onblur) {
      this.onblur(target, event, this.data)
    }
  }
  render() {
    return `<div class='mdui-textfield {{if 'true'===floating}}mdui-textfield-floating-label{{/if}}'>
      {{if icon}} <omic-icon data-icon='{{icon}}' data-clazz='icon-middle'/> {{/if}}
      {{if label}} <label class='mdui-textfield-label'>{{label}}</label> {{/if}}
      {{if 'true'===multiple}}
        <textarea ref='OmicInput-input-{{key}}' id='{{id}}' name='{{name}}' placeholder='{{placeholder}}'
          class='mdui-textfield-input {{clazz}}' style='{{style}}'
          onchange='handleChange(this, event)' onblur='handleBlur(this,event)'
          {{if maxlength&&maxlength>0}} maxlength='{{maxlength}}' {{/if}}
          {{if 'true'===disabled}} disabled {{/if}}
          {{if 'true'===required}} required {{/if}}
          value='{{value}}'
        ></textarea>
      {{else}}
        <input ref='OmicInput-input-{{key}}' id='{{id}}' name='{{name}}' value='{{value}}'
          type='{{type}}' placeholder='{{placeholder}}' class='mdui-textfield-input {{clazz}}'
          style='{{style}}' onchange='handleChange(this, event)' onblur='handleBlur(this,event)'
          {{if maxlength&&maxlength>0}} maxlength='{{maxlength}}' {{/if}}
          {{if 'true'===disabled}} disabled {{/if}}
          {{if 'true'===required}} required {{/if}}
        />
      {{/if}}
      {{if msg}}
        <div class="mdui-textfield-error">{{msg}}</div>
      {{/if}}
    </div>`
  }
}