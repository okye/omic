import Omi from 'omi'
import artTemplate from './3rd/artTemplate@3.1.0/template-debug.js'
import OmicIcon from './components/icon/OmicIcon'
import OmicInput from './components/input/OmicInput'

Omi.template = function (tpl, data) {
  return artTemplate.compile(tpl)(data)
}

Omi.makeHTML('omic-icon', OmicIcon)
Omi.makeHTML('omic-input', OmicInput)
