import Omic from '../components/Omic'

export default {
  toPascalCase (original) {
    // 连字符转Pascal命名
    original = this.toCamelCase(original)
    if (original) {
      return original.slice(0,1).toUpperCase() + original.slice(1)
    }
  },
  toCamelCase (original) {
    // 连字符转为驼峰命名
    if (original) {
      return original.replace(/-(\w)/g, function (all, letter) {
        return letter.toUpperCase()
      })
    }
  },
  toHyphenCase (original) {
    // Pascal或驼峰转为连字符
    if (original) {
      original = original.slice(0,1).toLowerCase() + original.slice(1)
      return original.replace(/([A-Z])/g,"-$1").toLowerCase()
    }
  },
  eachInstall (Omi, components, prefix = '') {
    if (Omi && Omi.makeHTML) {
      Object.keys(components).forEach((key) => {
        let subComponent = components[key]
        if (subComponent.$isPkg) {
          this.eachInstall(Omi, subComponent, prefix)
        } else if (subComponent instanceof Function) {
          if (prefix && !(prefix.lastIndexOf('-') === (prefix.length - 1))){
            prefix = prefix + '-'
          }
          let name = prefix + this.toHyphenCase(key)
          Omi.makeHTML(name, subComponent)
        }
      })
    }
  }
}
