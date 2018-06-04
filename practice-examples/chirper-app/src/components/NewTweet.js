// React Library
import React, { Component } from 'react'

// React Redux Connect function
import { connect } from 'react-redux'

// React Router Redirect Component
import { Redirect } from 'react-router-dom'

// handleAddTweet Function
import { handleAddTweet } from '../actions/tweets'

class NewTweet extends Component {

	// Using component state instead of Redux state because of simplicity of the use
	state = {
		text: '',
		toHome: false
	}

	handleChange = (e) => {

		const text = e.target.value

		this.setState(() => ({
			text
		}))
	}

	handleSubmit = (e) => {

		e.preventDefault()

		const { text } = this.state
		const { dispatch, id } = this.props

		dispatch(handleAddTweet(text, id))

		this.setState(() => ({
			text: '',
			toHome: id ? false : true
		})) 
	}

	render() {

		const { text, toHome } = this.state

		if ( toHome === true )
		{	
			return <Redirect to='/' />
		}

		const tweetLeft = 280 - text.length

		return (
			<div>
				<h3 className='center'>Compose new Tweet</h3>
				<form className='new-tweet' onSubmit={this.handleSubmit}>
					<textarea
						placeholder="What's happening?"
						value={text}
						onChange={this.handleChange}
						className='textarea'
						maxLength={280}
					/>
					{
						tweetLeft < 100 && (
							<div className='tweet-length'>
								{tweetLeft}
							</div>
						)
					}
					<button
						className='btn'
						type='submit'
						disabled={text === ''}
					>
						Submit
					</button>
				</form>
			</div>
		)
	}
}

export default connect()(NewTweet)