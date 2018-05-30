// Authed User Action Types
export const SET_AUTHED_USER = 'SET_AUTHED_USER'

// Authed User Action Creator
export function setAuthedUser(id) {
	return {
		type: SET_AUTHED_USER,
		id
	}
}