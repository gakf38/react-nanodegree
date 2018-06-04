// React Library
import React, { Component, Fragment } from 'react'

// React Redux Connect function
import { connect } from 'react-redux'

// React Router Components
import { BrowserRouter as Router, Route } from 'react-router-dom'

// React Redux Loading Component
import LoadingBar from 'react-redux-loading'

// Handle Initial Data Action Creator
import { handleInitialData } from '../actions/shared'

// Components
import Dashboard from './Dashboard'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'
import Nav from './Nav'

class App extends Component {

	componentDidMount() {
		this.props.dispatch(handleInitialData())
	}
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            {
              this.props.loading === true
              ? null 
              : <div>
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/tweet/:id' component={TweetPage} />
                  <Route path='/new' component={NewTweet} />
                </div>
            }
          </div>  
        </Fragment>
      </Router>
    )
  }
}

// Maps a boolean of true/false to the loading prop depending on if the authedUser state of the store is populated
function mapStateToProps({ authedUsers }) {
  return {
    loading: authedUsers === null
  }
}

// Use the react-redux connect function to 'connect' the App component to the Redux store
export default connect(mapStateToProps)(App)