import React, {Component, PropTypes} from 'react'

export default class Navagator extends Component {
  constructor(props){
    super(props)

    if (props.hasOwnProperty('activeIndex')) {
      const {activeIndex, links} = props
      if (activeIndex < 0 || activeIndex > links.length - 1) {
        throw new Error('make sure the value of activeIndex is between 0 and link length')
      }
    } 
    this.state = {
      activeIndex: props.activeIndex
    }
  }

  static propTypes = {
    links: PropTypes.array.isRequired,
    activeIndex: PropTypes.number
  }
  
  render() {
    const {activeIndex} = this.state
    return (
      <ul className="navigator">
        { this.props.links.map(
            (link,index) => this.renderNavItem(link, index, index === activeIndex)
          ) 
        }
      </ul>
    )
  }

  onNavIndexChange(activeIndex) {
    this.setState({activeIndex})
  }

  renderNavItem(link, idx, active) {
    return (
      <li key={idx}>
        <a 
          href={link.href}
          onClick={() => this.onNavIndexChange(idx)}
          className={active ? 'active' : null}>
          {link.text}
        </a>
      </li>
    )
  }
}