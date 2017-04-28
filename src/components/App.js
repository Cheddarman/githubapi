import React from 'react';
import Header from './HeadBit'
import Avatar from './ProfilePic'
import Tabs from './NavTabs'
import Repository from './RepositoriesTab'

export default React.createClass({
  render() {
    return (
      <div className='MainBit'>
        <Header />
        <Avatar />
        <div className='tabsarea'>
          <Tabs />
          <Repository />
        </div>
      </div>
    )
  }
})