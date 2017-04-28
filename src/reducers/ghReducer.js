const initialState = {
	accountData: {},
	repoData: []
}

export default function(state = initialState, action) {
	switch(action.type) {
    case 'GET_DATA':
      return {...state, accountData: action.user}
    case 'GET_REPO':
    	return {...state, repoData: action.repos}
		default:
			return state
  }
}
