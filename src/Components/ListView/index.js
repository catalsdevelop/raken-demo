import React, {Component} from 'react'

export default class ListView extends Component {
  render() {
    return (
      <ul className="list" {...this.props}>{this.props.children}</ul>
    )
  }
}

export class ListViewItem extends Component {
  render() {
    return (
      <li><a href="#">{ this.props.children }</a></li>
    )
  }
}