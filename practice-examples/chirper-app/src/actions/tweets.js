// saveLikeToggle API function
import { saveLikeToggle } from '../utils/api'

// Tweets Action Types
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOGGLE_TWEET = 'TOGGLE_TWEET'

// Receive Tweets Action Creator Function
export function receiveTweets(tweets) {
	return {
		type: RECEIVE_TWEETS,
		tweets
	}
}

// Toggle Tweet Action Creator Function
function toggleTweet({ id, authedUser, hasLiked }) {
	return {
		type: TOGGLE_TWEET,
		id, 
		authedUser,
		hasLiked
	}
}

// Toggle Tweet Async Action Creator Function
export function handleToggleTweet(info) {

	return (dispatch) => {

		// Toggle the Tweet on the GUI
		dispatch(toggleTweet(info))

		return saveLikeToggle(info)
			.catch((error) => {
				console.warn('Error in handleToggleTweet: ' + error)
				// Revert the GUI Toggle Tweet changes
				dispatch(toggleTweet(info))
				alert('There was an error liking the tweet. Try again.')
			})

	}

}