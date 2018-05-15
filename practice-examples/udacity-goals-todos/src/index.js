// React Library
import React from 'react'

// ReactDOM Library 
import ReactDOM from 'react-dom'

// Main Styling
import './index.css'

// App Component
import App from './components/App'

// Provider Component
import { Provider } from 'react-redux'

// Root Reducer 
import reducer from './reducers'

// Middleware
import middleware from './middleware'

// createStore Function
import { createStore } from 'redux'

// Create the Redux Store
const store = createStore(reducer, middleware)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
)