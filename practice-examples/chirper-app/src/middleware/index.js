// Redux applyMiddleware Function
import { applyMiddleware } from 'redux'

// Redux Thunk Middleware Function
import thunk from 'redux-thunk'

// Custom Middleware Functions
import logger from './logger'

// applyMiddleware Function
export default applyMiddleware(
	thunk,
	logger
)