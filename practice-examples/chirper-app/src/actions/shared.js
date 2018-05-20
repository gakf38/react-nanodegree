// API Functions
import { getInitialData } from '../utils/api'

// Action Creators
import { receiveUsers } from '../actions/users'
import { receiveTweets } from '../actions/tweets'

// Asynchronous Action Creator using Redux Thunks
export function handleInitialData () {
	return (dispatch) => {
		return getInitialData()
			.then(({ users, tweets }) => {

				// Dispatch the initial data to the store
				dispatch(receiveUsers(users))
				dispatch(receiveTweets(tweets))
				
			})
	}
}