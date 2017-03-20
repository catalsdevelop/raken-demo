import React, { Component } from 'react';
import face from './face.svg'

export default class Avatar extends Component {
  render() {
    return (
      <div className="avatar">
        <span className="detail">All SETTINGS</span>
        <div className="content">
          <a href="#profile-ddl"><img src={face} alt="avatar-img" /></a>
        </div>
      </div>
    )
  }
}