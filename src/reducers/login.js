import { CHANGE_LOGIN_DATA, SENDING_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED } from '../constants/index'

const initialState = {
	loginData: {
		name: '',
		pwd: ''
	}
}

const login = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_LOGIN_DATA:
			return Object.assign({}, state, {loginData: action.newState})
			break

		case CHANGE_LOGIN_DATA:
			return Object.assign({}, state, {loginData: action.newState})
			break

		case LOGIN_FAILED: 
			return Object.assign({}, state, {loginAlert: action.loginAlert})
			location.href = 'user'
			break 

		case LOGIN_SUCCESS: 
			return state
			location.href = 'user'
			break 

		default:
            return state
            break
	}
}

export default login