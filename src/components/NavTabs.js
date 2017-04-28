import React from 'react'

const Tabs = React.createClass({
  render() {
    return(
    	<div className='NavTabs'>
        <ul>
          <li>Overview</li>
          <li>Repositories</li>
          <li>Stars</li>
          <li>Followers</li>
          <li>Following</li>
        </ul>
      </div>
    )
  }
})

export default Tabs