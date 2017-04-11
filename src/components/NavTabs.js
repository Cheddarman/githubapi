import React from 'react'

const Tabs = React.createClass({
  render() {
    return(
    	<div className='NavTabs'>
        <a>Overview</a>
        <a>Repositories</a>
        <a>Stars</a>
        <a>Followers</a>
        <a>Following</a>
      </div>
    )
  }
})

export default Tabs