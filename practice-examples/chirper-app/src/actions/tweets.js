// saveLikeToggle API function
import { saveLikeToggle, saveTweet } from '../utils/api'

// React Redux Loading Action Creators
import { showLoading, hideLoading } from 'react-redux-loading'

// Tweets Action Types
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOGGLE_TWEET = 'TOGGLE_TWEET'
export const ADD_TWEET = 'ADD_TWEET'

// Add Tweet Action Creator Function
function addTweet(tweet) {
	return {
		type: ADD_TWEET,
		tweet
	}
}

// Add Tweet Async Action Creator Function
export function handleAddTweet(text, replyingTo) {
	return (dispatch, getState) => {
		
		const { authedUsers } = getState()

		dispatch(showLoading())

		return saveTweet({ text, author: authedUsers, replyingTo })
			.then((tweet) => dispatch(addTweet(tweet)))
			.then(() => dispatch(hideLoading()))
	}
}

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