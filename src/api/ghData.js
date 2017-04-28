import axios from 'axios'
import store from '../store'

export function getData() {
  axios.get('https://api.github.com/users/Cheddarman').then(function (resp) {
  	console.log('res', resp)
  	store.dispatch({
      type: 'GET_DATA',
      user: resp.data
    })
  })
}
export function getRepo() {
  axios.get('https://api.github.com/users/Cheddarman/repos').then(function (resp) {
  	store.dispatch({
      type: 'GET_REPO',
      repos: resp.data 
    })
  })
}