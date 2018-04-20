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

// Action type constants
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const ADD_GOAL = 'ADD_GOAL'
const REMOVE_GOAL = 'REMOVE_GOAL'

// Action Creator Functions
function addTodoAction (todo) {
	return {
		type: ADD_TODO,
		todo
	}
}

function removeTodoAction (id) {
	return {
		type: REMOVE_TODO,
		id
	}
}

function toggleTodoAction (id) {
	return {
		type: TOGGLE_TODO,
		id
	}
}

function addGoalAction (goal) {
	return {
		type: ADD_GOAL,
		goal
	}
}

function removeGoalAction (id) {
	return {
		type: REMOVE_GOAL,
		id
	}
}

// TODOS Reducer Function
function todos (state = [], action) {

	switch (action.type) {

		case ADD_TODO :
			return state.concat([action.todo])

		case REMOVE_TODO :
			return state.filter((todo) => todo.id === action.id)

		case TOGGLE_TODO :
			return state.map((todo) => todo.id !== action.id ? todo : 
				Object.assign({}, todo, { complete: !todo.complete })
			)

		default :
			return state
	}
}

// GOALS Reducer Function
function goals (state = [], action) {

	switch (action.type) {

		case ADD_GOAL:
			return state.concat([action.goal])

		case REMOVE_GOAL:
			return state.filter((goal) => goal.id === action.id)

		default: 
			return state
	}
}

// Root Reducer Function
function app (state = {}, action) {

	return {
		todos: todos(state.todos, action),
		goals: goals(state.goals, action)
	}
}

// Create the Store
const store = createStore(app)

// Subscribe a listener to the Store
store.subscribe(() => {
	console.log('The new state is: ', store.getState())
})	

// Dispatch actions to the Store
store.dispatch(addTodoAction({
  id: 0,
  name: 'Walk the dog',
  complete: false,
}))

store.dispatch(addTodoAction({
  id: 1,
  name: 'Wash the car',
  complete: false,
}))

store.dispatch(addTodoAction({
  id: 2,
  name: 'Go to the gym',
  complete: true,
}))

store.dispatch(removeTodoAction(1))

store.dispatch(toggleTodoAction(0))

store.dispatch(addGoalAction({
  id: 0,
  name: 'Learn Redux'
}))

store.dispatch(addGoalAction({
  id: 1,
  name: 'Lose 20 pounds'
}))

store.dispatch(removeGoalAction(0))