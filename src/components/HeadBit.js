import React from 'react'

const Header = React.createClass({
  render() {
    return(
    	<div className='HeadBit'>
    		<img />
    		<form>
    			<input type='text' />
    		</form>
    		<a>Pull Requests</a>
    		<a>Issues</a>
    		<a>Gist</a>
    		<a>+</a>
    		<a>Active user image goes here</a>
    	</div>
    )
  }
})

export default Header