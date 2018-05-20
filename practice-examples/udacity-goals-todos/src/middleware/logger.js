// Loger Middleware Function
const logger = (store) => (next) => (action) => {
	console.group(action.type)
		console.log('The action: ', action)
		const result = next(action)
		console.log('The new state: ', store.getState())
	console.groupEnd()
}

export default logger