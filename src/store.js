import { createStore } from 'redux'
import ghReducer from './reducers/ghReducer'

const store = createStore(ghReducer)

export default store