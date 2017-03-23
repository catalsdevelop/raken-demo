import React, { Component, PropTypes } from 'react'

export default class Tip extends Component {
  static propTypes = {
    display: PropTypes.bool,
  }

  static defaultProps = {
    display: false
  }
  
  constructor(props) {
    super(props)
    this.state = {
      display: props.display
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.display !== this.props.display) {
      this.setState({
        display: nextProps.display
      })
    }
  }

  render() {
    const display = this.state.display ? 'block': 'none'
    return (
      <div {...this.props} className="tip-container" style={{display}}>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}