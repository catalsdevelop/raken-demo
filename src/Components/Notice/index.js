import React, {Component, PropTypes} from 'react'

export default class Notice extends Component {
  static propTypes = {
    style: PropTypes.object,
    children:PropTypes.string.isRequired,
  }
  //defualt style set in the scss file

  render() {
    const {style, children} = this.props
    return (
      <span className="notice" style={style}>{children}</span>
    )
  }
}