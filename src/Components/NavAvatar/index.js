import React, { Component, PropTypes } from 'react'
import Avatar from '../Avatar/'
import Tip from '../Tip/'
import ListView, {ListViewItem} from '../ListView/'
import Notice from '../Notice/'
import ClickOutside from '../ClickOutside'

export default class NavAvatar extends Component {
  static propTypes = {
    slideShow:PropTypes.bool
  }

  static defaultProps = {
    slideShow: false
  }

  constructor(props) {
    super(props)
    this.state = {
      slideShow: this.props.slideShow
    }
  }

  toggleSlide(e) {
    this.setState({
      slideShow : !this.state.slideShow
    })
  }

  hideSlide() {
    this.setState({
      slideShow: false
    })
  }

  render() {
    const {slideShow} = this.state
    const className = 'avatar-container' + (slideShow ? ' active' : '')
    return (
      <ClickOutside onClickOutside={() => this.hideSlide()} className="click-container">
        <div className={className} onClick={(e) => this.toggleSlide(e)}>
            <Avatar />
            <Tip display={slideShow} onClick={(e) => e.stopPropagation()}>
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
      </ClickOutside>
    )
  }
}
