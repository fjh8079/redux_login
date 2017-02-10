import fetch from 'isomorphic-fetch'
import { GET_USERS, GET_USERS_SUCCESS, SHOW_ALERT, API_URL } from '../constants/index.js';

function getUserListSuccess(content) {
	return {
		type: GET_USERS_SUCCESS,
		content
	}
}

export function getUsers() {
	return dispatch => {
		let accessToken = localStorage.getItem('access_token')
		return fetch(`${API_URL}/member`, {
            method: 'GET',
            headers: {
			    'Content-Type': 'application/json',
			    'Authorization': accessToken
			}
        })
		.then(response => response.json())
		.then(json => {
			if(json.data) {
				dispatch(getUserListSuccess(json.data))
			} else if(json.code === 'invalid_token') {
				location.href = 'login'
			} else {
				dispatch(getUsersError(json))
			}
		})
	}
}

function getUsersError(json) {
	return {
		type: SHOW_ALERT,
		alertContent: json.code
	}
}

export function createUser(data) {
	return dispatch => {
		let accessToken = localStorage.getItem('access_token')
		return fetch(`${API_URL}/member`, {
            method: 'POST',
            headers: {
			    'Content-Type': 'application/json',
			    'Authorization': accessToken
			},
			body: JSON.stringify(data)
        })
		.then(response => response.json())
		.then(json => {
			if(json.code === 'success') {
				dispatch(getUsers())
			} else if(json.code === 'invalid_token') {
				location.href = 'login'
			} else {
				dispatch(getUsersError(json))
			}
		})
	}
}