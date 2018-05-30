// API Functions
import { getInitialData } from '../utils/api'

// Action Creators
import { receiveUsers } from '../actions/users'
import { receiveTweets } from '../actions/tweets'
import { setAuthedUser } from '../actions/authedUsers'

// Authenicated User (must be one of three users in utils/_DATA.js)
const AUTHED_ID = 'tylermcginnis'

// Asynchronous Action Creator using Redux Thunks
export function handleInitialData () {
	return (dispatch) => {
		return getInitialData()
			.then(({ users, tweets }) => {

				// Dispatch the initial data to the store
				dispatch(receiveUsers(users))
				dispatch(receiveTweets(tweets))
				dispatch(setAuthedUser(AUTHED_ID))

			})
	}
}