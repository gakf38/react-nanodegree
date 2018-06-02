// Tweets Action Types
import { RECEIVE_TWEETS, TOGGLE_TWEET } from '../actions/tweets'

// Tweets Reducer Function
export default function tweets (state = {}, action) {

	switch (action.type) {

		case RECEIVE_TWEETS :
			return {
				...state,
				...action.tweets
			}

		case TOGGLE_TWEET :
			return {
				...state,
				[action.id]: {
					...state[action.id],
					likes: action.hasLiked === true 
						? state[action.id].likes.filter((uid) => uid !== action.authedUser)
						: state[action.id].likes.concat([action.authedUser])
				}
			}

		// Initialize the tweets portion of the state to an empty object
		default :
			return state

	}

}