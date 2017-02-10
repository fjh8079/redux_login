import { GET_USERS_SUCCESS } from '../constants/index'

const initialState = {
	member: []
}

const user = (state = initialState, action) => {
	switch (action.type) {
		case GET_USERS_SUCCESS:
			return Object.assign({}, state, {member: action.content})
			break
		default:
            return state
            break
	}
}

export default user