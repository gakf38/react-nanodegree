// React Library
import React, { Component } from 'react'

// React Redux Connect function
import { connect } from 'react-redux'

// Handle Initial Data Action Creator
import { handleInitialData } from '../actions/shared'

// Components
import Dashboard from './Dashboard'

class App extends Component {

	componentDidMount() {
		this.props.dispatch(handleInitialData())
	}
  render() {
    return (
      <div>
      {
        (this.props.loading === true) ? null : <Dashboard />
      }
      </div>
    )
  }
}

// Maps a boolean of true/false to the loading prop depending on if the authedUser state of the store is populated
function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

// Use the react-redux connect function to 'connect' the App component to the Redux store
export default connect(mapStateToProps)(App)