// React Library
import React from 'react'

// React-Redux connect Function
import { connect } from 'react-redux'

// List Component
import List from './List'

// Goals Action Creator
import {
	handleAddGoal,
	handleDeleteGoal
} from '../actions/goals'

// Goals Component
class Goals extends React.Component {

	addItem = (e) => {
		e.preventDefault()

		// Dispatch the action creator to return a function to the Thunk
		this.props.dispatch(handleAddGoal(
			this.input.value,
			() => this.input.value = ''
		))
	}

	removeItem = (goal) => {
		// Dispatch the action creator to return a function to the Thunk
		this.props.dispatch(handleDeleteGoal(goal))
	}

	render() {
		return (
			<div>
				<h1>Goals</h1>
				<input
					type='text'
					placeholder='Add Goal'
					ref={(input) => this.input = input}
				/>
				<button onClick={this.addItem}>Add Goal</button>

				<List 
					items={this.props.goals} 
					remove={this.removeItem}
				/>
			</div>
		)
	}
}

// Connect Goals Component to Redux Store
export default connect((state) => ({
	goals: state.goals
}))(Goals)