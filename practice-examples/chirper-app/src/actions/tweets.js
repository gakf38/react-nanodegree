// Tweets Action Types
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'

// Tweets Action Creator Functions
export function receiveTweets(tweets) {
	return {
		type: RECEIVE_TWEETS,
		tweets
	}
}