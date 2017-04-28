import React from 'react'

const Header = React.createClass({
  render() {
    return(
    	<div className='HeadBit'>
	    	<div className='lefthead'>	
	    		<img src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSVDMEDKuNbiXFbVETIDkPDrUvR9wURNAirXQyqLM-jDa9NoJVyUg'/>
	    		<form>
	    			<input type='text' />
	    		</form>
	    		<div className='leftnav'>
		    		<a>Pull Requests</a>
		    		<a>Issues</a>
		    		<a>Gist</a>
		    	</div>
		    </div>
	    	<div className='rightnav'>
	    		<a>+</a>
	    		<a>Active user image goes here</a>
    		</div>
    	</div>
    )
  }
})

export default Header