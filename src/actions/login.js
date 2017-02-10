import fetch from 'isomorphic-fetch'
import { CHANGE_LOGIN_DATA, SENDING_REQUEST, LOGIN, LOGIN_SUCCESS, LOGIN_FAILED, API_URL } from '../constants/index.js';

export function changeLoginData(newState) {
	return { type: CHANGE_LOGIN_DATA, newState };
}

function sendingRequest(sending) {
	return {
		type: SENDING_REQUEST,
		sending
	}
}

function loginSuccess() {
	return {
		type: LOGIN_SUCCESS
	}
}

function loginFailed(json) {
	return {
		type: LOGIN_FAILED,
		loginAlert: json
	}
}

export function login(data) {
	return dispatch => {
		dispatch(sendingRequest(true))
		return fetch(`${API_URL}`, {
            method: 'POST',
            headers: {
			    'Content-Type': 'application/json'
			},
            body: JSON.stringify(data)
        })
		.then(response => response.json())
		.then(json => {
			if(json.token) {
				localStorage.setItem('access_token', json.token.token)
				dispatch(loginSuccess())
				location.href = '/'
			} else {
				dispatch(loginFailed(json))
			}
		})
	}
}