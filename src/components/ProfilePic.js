import React from 'react'
import store from '../store'
import initialState from '../reducers/ghReducer'
import {getData} from '../api/ghData'

class Avatar extends React.Component {
  
  constructor() {
    super()
      this.state = {
        accountData: {
          avatar_url: ''
        }
      }
  }

  componentWillMount() {
    store.subscribe(() => {
      const appState = store.getState()
      const userData = appState.accountData
      this.setState({
        accountData: userData      
      })
    })
    getData()
  }

  render() {

    console.log(this.state.accountData)
    return(
      <div className='AvatarBit'>
        <img src={this.state.accountData.avatar_url}/>
        <h3>Owner name</h3>
        <h4>username</h4>
        <button />
        <a>Block or report user</a>
      </div>
    )
  }
}
export default Avatar