// Library Code - Close to a library that would come from NPM package
function createStore(reducer) {

	/*
		The store should have 4 parts:
		1. the state
		2. interaction to get the state
		3. interaction to listen for changes to the state
		4. interaction to update the state
	*/

	// Define the State of the Store
	let state 

	// Define a way to get the State of the Store
	const getState = () => state

	// Define a way to listen for changes to the state
	let listeners = []
	const subscribe = (listener) => {
		// Add the listener to the listeners array
		listeners.push(listener)
		// Return a function that can be invoked to 'unsubscribe' the added listener
		return () => {
			listeners = listeners.filter((l) => l !== listener)
		}
	}

	// Define a way to update the state of the store
	const dispatch = (action) => {
		state = reducer(state, action)
		listeners.forEach((listener) => listener())
	}


	return {
		getState,
		subscribe,
		dispatch
	}
}

// App Code - Close to code that the user would write
function todo (state = [], action) {

	switch (action.type) {

		case 'ADD_TODO' :
			return state.concat([action.todo])

		case 'REMOVE_TODO' :
			return state.filter((todo) => todo.id === action.id)

		case 'TOGGLE_TODO' :
			return state.map((todo) => todo.id !== action.id ? todo : 
				Object.assign({}, todo, { complete: !todo.complete })
			)
			
		default :
			return state
	}
}

// Create the Store
const store = createStore(todo)

// Subscribe a listener to the Store
store.subscribe(() => {
	console.log('The new state is: ', store.getState())
})	

// Dispatch an action to the Store
store.dispatch({
	type: 'ADD_TODO',
	todo: {
		id: 0,
		name: 'Learn Redux',
		complete: false
	}
})
