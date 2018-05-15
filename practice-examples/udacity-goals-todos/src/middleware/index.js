// Redux Apply Middleware Function
import { applyMiddleware } from 'redux'

// Middleware Functions
import checker from './checker'
import logger from './logger'
import thunk from 'redux-thunk'

// Apply Middleware
export default applyMiddleware(
	thunk,
	checker,
	logger
)