import React, { Component } from 'react'
import Logo from '../Logo/'
import Avatar from '../Avatar/'
import Navigator from '../Navigator/'
import Tip from '../Tip/'
import ListView, {ListViewItem} from '../ListView/'
import Notice from '../Notice/'

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
        <div className="avatar-container">
          <Avatar />
          <Tip id="profile-ddl">
            <ListView>
              <ListViewItem>
                MY PROFILE
              </ListViewItem>
              <ListViewItem>
                MY PROJECTS
                <Notice>23</Notice>
              </ListViewItem>
              <ListViewItem>
                NOTICATIONS
                <Notice>23</Notice>
              </ListViewItem>
              <ListViewItem>
                TASKS
                <Notice>23</Notice>
              </ListViewItem>
              <ListViewItem>
                HELP
              </ListViewItem>
              <ListViewItem>
                LOGOUT
              </ListViewItem>
            </ListView>
          </Tip>
        </div>
      </div>
    )
  }
}