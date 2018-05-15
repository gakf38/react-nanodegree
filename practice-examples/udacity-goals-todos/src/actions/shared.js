import API from 'goals-todos-api'

// Shared Action Type Constants
export const RECEIVE_DATA = 'RECEIVE_DATA'

// Shared Action Creator Functions
function receiveData (todos, goals) {
	return {
		type: RECEIVE_DATA,
		todos,
		goals
	}
}

// Shared Async Action Creator Functions
export function handleInitialData () {
	return (dispatch) => {
		// Request data on render, wait for all promises to resolve
		return Promise.all([
			API.fetchTodos(),
			API.fetchGoals()
		])
		.then(([todos, goals]) => {
			dispatch(receiveData(todos, goals))
		});
	}
}