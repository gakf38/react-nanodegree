// React Library import
import React, { Component } from 'react'

// React Redux Connect function
import { connect } from 'react-redux'

// Handle Initial Data Action Creator
import { handleInitialData } from '../actions/shared'

class App extends Component {

	componentDidMount() {
		this.props.dispatch(handleInitialData())
	}
  render() {
    return (
      <div>
        Starter Code
      </div>
    )
  }
}

// Use the react-redux connect function to 'connect' the App component to the Redux store
export default connect()(App)