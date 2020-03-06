class ComponentModel {
  constructor ({ type, title, props }) {
    this.type = type
    this.title = title
    this.props = props
    this.elements = []
    this.id = Date.now()
  }
}

export default ComponentModel
