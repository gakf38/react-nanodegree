// React Library
import React from 'react'

// React-Redux connect Function
import { connect } from 'react-redux'

// Connected Todos Component
import ConnectedTodos from './Todos'

// Connected Goals Component
import ConnectedGoals from './Goals'

// Shared Action Creator
import {
	handleInitialData
} from '../actions/shared'

// App Component
class App extends React.Component {
	componentDidMount() {
		const { dispatch } = this.props

		// Dispatch the action creator to return a function to the Thunk
		dispatch(handleInitialData())
	}

	render() {

		// Check if the RECIEVE_DATA action has been dispatched
		if (this.props.loading === true)
		{
			return <h3>Loading</h3>
		}

		return (
			<div>
				<ConnectedTodos />
				<ConnectedGoals />
			</div>
		)
	}
}

// Connect App Component to Redux Store
export default connect((state) =>({
	loading: state.loading
}))(App)
