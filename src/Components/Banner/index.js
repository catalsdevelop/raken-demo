import React, { Component } from 'react'
import Logo from '../Logo/'
import Navigator from '../Navigator/'
import NavAvatar from '../NavAvatar'

export default class Banner extends Component {
  render() {
    const links = [{
      href: '#DASHBOARD', text: 'DASHBOARD'
    },{
      href: '#PROJECTS', text: 'PROJECTS'
    },{
      href: '#TEAM', text: 'TEAM'
    },{
      href: '#COMPANY', text: 'COMPANY'
    },]

    return (
      <div className="banner">
        <Logo />
        <Navigator links={links} activeIndex={1} />
        <NavAvatar slideShow={false} />
      </div>
    )
  }
}