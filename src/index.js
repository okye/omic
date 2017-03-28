import Omi from 'omi'
import artTemplate from './3rd/artTemplate@3.1.0/template-debug.js'

import Components from './components'
import Omic from './components/Omic'
import Utils from './utils/Utils'

Omi.template = function (tpl, data) {
  return artTemplate.compile(tpl)(data)
}

const components = {
  Components
}

const install = function (Omi) {
  Utils.eachInstall(Omi, components, '')
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
