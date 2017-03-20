import React, { Component } from 'react';

export default class Tip extends Component {
  render() {
    return (
      <div className="tip-container" {...this.props}>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}