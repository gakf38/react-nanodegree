// Redux Combine Reducers Function
import { combineReducers } from 'redux'

// Reducer Functions
import authedUsers from './authedUsers'
import users from './users'
import tweets from './tweets'

// React Redux Loading Bar
import { loadingBarReducer } from 'react-redux-loading'

// Root Reducer Function
export default combineReducers({
	authedUsers,
	users,
	tweets,
	loadingBar: loadingBarReducer
})