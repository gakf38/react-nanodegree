// React imports
import React from 'react'
import ReactDOM from 'react-dom'

// Redux imports
import { createStore } from 'redux'
import { Provider } from 'react-redux' 

// Custom imports
import './index.css'
import App from './components/App'
import reducer from './reducers'

// Create Redux Store
const store = createStore(reducer)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
document.getElementById('root'))