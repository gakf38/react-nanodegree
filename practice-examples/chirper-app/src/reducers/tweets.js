// Tweets Action Types
import { RECEIVE_TWEETS } from '../actions/tweets'

// Tweets Reducer Function
export default function tweets (state = {}, action) {

	switch (action.type) {

		case RECEIVE_TWEETS :
			return {
				...state,
				...action.tweets
			}

		// Initialize the tweets portion of the state to an empty object
		default :
			return state

	}

}