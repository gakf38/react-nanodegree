// React Library
import React, { Component } from 'react'

// React Redux Connect function
import { connect } from 'react-redux'

class Dashboard extends Component {

	render() {
		return (
			<div>
				<h3 className='center'>Your Timeline</h3>
				<ul className='dahsboard-list'>
					{
						this.props.tweetIds.map((id) => (
							<li key={id}>
								<div>TWEET ID: {id}</div>
							</li>
						))
					}
				</ul>
			</div>
		)
	}
}

// Maps the ID of objects within the tweets state of the store and sorts them based on timestamps in descending order
function mapPropsToState({ tweets }) {
	return {
		tweetIds: Object.keys(tweets)
			.sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)
	}
}

export default connect(mapPropsToState)(Dashboard)