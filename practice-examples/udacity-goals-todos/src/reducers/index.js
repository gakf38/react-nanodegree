// Redux Combined Reducers Function
import { combineReducers } from 'redux'

// Reducer Functions
import todos from './todos'
import loading from './loading'
import goals from './goals'

// Combine Reducer Functions
export default combineReducers({
	todos,
	loading,
	goals
})