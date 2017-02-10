import { CHANGE_LOGIN_DATA } from '../constants/index'

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

		default:
            return state
            break
	}
}

export default login