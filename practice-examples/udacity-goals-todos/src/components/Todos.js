// React Library
import React from 'react'

// React-Redux connect Function
import { connect } from 'react-redux'

// List Component
import List from './List'

// Todos Action Creator
import {
	handleAddTodo,
	handleDeleteTodo,
	handleToggle
} from '../actions/todos'

// Todos Component
class Todos extends React.Component {

	addItem = (e) => {
		e.preventDefault()

		// Dispatch the action creator to return a function to the Thunk
		this.props.dispatch(handleAddTodo(
			this.input.value,
			() => this.input.value = ''
		))
	}

	removeItem = (todo) => {
		// Dispatch the action creator to return a function to the Thunk
		this.props.dispatch(handleDeleteTodo(todo))
	}

	toggleItem = (id) => {
		// Dispatch the action creator to return a function to the Thunk
		this.props.sdispatch(handleToggle(id))
	}

	render() {
		return (
			<div>
				<h1>Todos List</h1>
				<input
					type='text'
					placeholder='Add Todo'
					ref={(input) => this.input = input}
				/>
				<button onClick={this.addItem}>Add Todo</button>
				<List 
					items={this.props.todos} 
					remove={this.removeItem}
					toggle={this.toggleItem}
				/>
			</div>
		)
	}
}

// Connect Todos Component to Redux Store
export default connect((state) => ({
	todos: state.todos
}))(Todos)