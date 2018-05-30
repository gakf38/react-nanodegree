// Users Action Types
export const RECEIVE_USERS = 'RECEIVE_USERS'

// Users Action Creator Functions
export function receiveUsers (users) {
	return {
		type: RECEIVE_USERS,
		users
	}
}