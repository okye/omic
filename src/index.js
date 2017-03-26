import Omi from 'omi'
import artTemplate from './3rd/artTemplate@3.1.0/template-debug.js'

import Omic from './components/Omic'
import OmicIcon from './components/icon/OmicIcon'
import OmicInput from './components/input/OmicInput'

import Utils from './utils/Utils'

Omi.template = function (tpl, data) {
  return artTemplate.compile(tpl)(data)
}

const Components = {
  OmicIcon,
  OmicInput
}

const eachInstall = function (Omi, components, prefix = '') {
  Object.keys(components).forEach((key) => {
    let subComponent = components[key]
    if (subComponent._isPkg) {
      eachInstall(Omi, subComponent, prefix)
    }
    let name = (prefix ? (prefix + '-') : '') + Utils.toHyphenCase(key)
    Omi.makeHTML(name, subComponent)
  })
}

const install = function (Omi) {
  eachInstall(Omi, Components, '')
}

// auto install
if (typeof window !== 'undefined' && window.Omi) {
  install(window.Omi)
}

export default {
  Omic,
  Utils,
  install
}
