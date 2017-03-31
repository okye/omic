import OmicInput from './OmicInput'

export default class OmicNumber extends OmicInput {
  constructor(data) {
    data = data ? data : {}
    data.type = 'number'
    data.clazz = 'mdui-text-right ' + data.clazz
    super(data)
  }
}