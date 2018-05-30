// React Library
import React, { Component } from 'react'

// React Redux Connect function
import { connect } from 'react-redux'

// Helper Functions
import { formatTweet, formatDate } from '../utils/helpers' 

// Tweet Icons
import TiArrowBackOutline from 'react-icons/lib/ti/arrow-back-outline'
import TiHeartOutline from 'react-icons/lib/ti/heart-outline'
import TiHeartFullOutine from 'react-icons/lib/ti/heart-full-outline'

class Tweet extends Component {

	toParent = (e, id) => {
		e.preventDefault()
		// todo: redirect to parent tweet
	}

	handleLike = (e) => {
		e.preventDefault()
		// todo: handle like tweet
	}

	render() {

		const { tweet } = this.props 

		// Check if the tweet exists
		if (tweet === null)
		{
			return (<p>This Tweet does not exist</p>)
		}

		const {
			name, avatar, timestamp, text, hasLiked, likes, replies, parent, 
		} = tweet

		return (
			<div className='tweet'>
				<img
					src={avatar}
					alt={`Avatar of ${name}`}
					className='avatar'
				/>
				<div className='tweet-info'>
					<div>
						<span>{name}</span>
						<div>{formatDate(timestamp)}</div>
						{ parent && (
							<button className='replying-to' onClick={(e) => this.toParent(e, parent.id)}>
								Replying to @{parent.author}
							</button>
						)}
						<p>{text}</p>
					</div>
					<div className='tweet-icons'>
						<TiArrowBackOutline className='tweet-icon' />
						<span>{replies !== 0 && replies}</span>
						<button className='heart-button' onClick={this.handleLike}>
							{
								hasLiked === true
								? <TiHeartFullOutine color='#e0245e' className='tweet-icon' />
								: <TiHeartOutline className='tweet-icon' />
							}
						</button>
						<span>{likes !== 0 && likes}</span>
					</div>
				</div>
			</div>
		)
	}
}

// Map the authedUser and the (formatted) tweet to the Tweet component as well as include the ID prop that the component is rendered with
function mapStateToProps({ authedUser, users, tweets }, { id }) {
	
	const tweet = tweets[id]
	// Ensure the tweet for the given ID exists
	const parentTweet = tweet ? tweets[tweet.replyingTo] : null

	return {
		authedUser,
		// Ensure the tweet for the given ID exists
		tweet: (tweet) ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet) : null
	}
}

export default connect(mapStateToProps)(Tweet)