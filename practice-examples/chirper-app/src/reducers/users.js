// Users Action Types
import { RECEIVE_USERS } from '../actions/users'

// Users Reducer Function
export default function users (state = {}, action) {

	switch (action.type) {

		case RECEIVE_USERS :
			return {
				...state,
				...action.users
			}

		// Initialize the users portion of the state to an empty object
		default :
			return state

	}

}