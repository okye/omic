import OmicInput from './OmicInput'

class OmicNumber extends OmicInput {
  constructor (data) {
    data = data ? data : {}
    data.type = 'number'
    data.cssclass = 'mdui-text-right ' + data.cssclass
    super(data)
  }
}

export default OmicNumber
