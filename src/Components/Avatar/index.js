import React, { Component } from 'react';
import face from './face.svg'

export default class Avatar extends Component {
  render() {
    return (
      <div className="avatar">
        <span className="desc">All SETTINGS</span>
        <div className="content">
          <img src={face} alt="avatar-img" />
        </div>
      </div>
    )
  }
}