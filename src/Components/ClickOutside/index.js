import React, { Component, PropTypes } from 'react' 

const DEFAULT_EVENTS = ['click', 'touchstart']

export default class ClickOutside extends Component {
  static propTypes = {
    onClickOutside: PropTypes.func.isRequired
  }

  render() {
    const { children, onClickOutside, ...props } = this.props
    return <div {...props} ref={ref => this.container = ref}>{children}</div>
  }

  componentDidMount() {
    DEFAULT_EVENTS.forEach(eventName => {
      document.addEventListener(eventName, this.handle, true)
    })
  }

  componentWillUnmount() {
    DEFAULT_EVENTS.forEach(eventName => {
      document.removeEventListener(eventName, this.handle, true)
    })
  }

  handle = e => {
    const { onClickOutside } = this.props
    const el = this.container
    if (!el.contains(e.target)) {
      onClickOutside(e)
    }
  }
}