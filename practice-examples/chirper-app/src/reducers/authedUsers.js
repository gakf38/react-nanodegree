// Authed Users Action Types
import { SET_AUTHED_USER } from '../actions/authedUsers'

// Authed Users Reducer Function
export default function authedUsers (state = null, action) {

	switch (action.type) {

		case SET_AUTHED_USER :
			return action.id

		// Initialize the authedUsers portion of the state to null
		default :
			return state

	}

}