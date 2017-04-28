import React from 'react'
import {getRepo} from '../api/ghData'
import store from '../store'

class Repository extends React.Component {
  constructor() {
    super()
    this.state = {
  		repoData:[]
  	}
  }
  componentWillMount() {
  	store.subscribe(()=>{
  		const appState = store.getState()

  		this.setState({
  			repoData:appState.items
  		})
  	})
  	getRepo()
  }
  
  render() {
    return(
    	<div className='RepositoryList'>
    		{this.state.repoData.map(repo=>(
    				<div key={repo.id} className="repo">
    					<ul>
    						<li>{repo.name}</li>
    					</ul>
    				</div>
    			))}
    	</div>
    )
  }
}
export default Repository