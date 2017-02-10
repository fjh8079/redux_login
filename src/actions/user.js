import fetch from 'isomorphic-fetch'
import { GET_USERS, GET_USERS_SUCCESS, API_URL } from '../constants/index.js';

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
			}
		})
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
				alert('success')
				dispatch(getUsers())
			}
		})
	}
}