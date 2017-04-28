import React from 'react'
import store from '../store'
import {accountData} from '../reducers/ghReducer'

class Avatar extends React.Component {
  
  constructor() {
    super()
      this.state = {
        accountData: ''
      }
  }

  componentWillMount() {
    store.subscribe(() => {
      const appState = store.getState()
      const userData = appState.userdata

      this.setState( {
        accountData: userData      
      })
    })
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