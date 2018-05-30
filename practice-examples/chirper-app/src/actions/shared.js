// API Functions
import { getInitialData } from '../utils/api'

// Action Creators
import { receiveUsers } from '../actions/users'
import { receiveTweets } from '../actions/tweets'
import { setAuthedUser } from '../actions/authedUsers'

// React Redux Loading Action Creators
import { showLoading, hideLoading } from 'react-redux-loading'

// Authenicated User (must be one of three users in utils/_DATA.js)
const AUTHED_ID = 'tylermcginnis'

// Asynchronous Action Creator using Redux Thunks
export function handleInitialData () {
	return (dispatch) => {
		dispatch(showLoading())
		return getInitialData()
			.then(({ users, tweets }) => {

				// Dispatch the initial data to the store
				dispatch(receiveUsers(users))
				dispatch(receiveTweets(tweets))
				dispatch(setAuthedUser(AUTHED_ID))
				dispatch(hideLoading())

			})
	}
}