import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { SHOW_ALERT } from '../constants/index'
import login from './login'
import user from './user'

const initialState = {
	alertContent: ''
}

const commonData = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_ALERT:
			return Object.assign({}, state, {alertContent: action.alertContent})
			break
		default: 
			return state
            break
	}
}

const rootReducer = combineReducers({
	commonData,
	login,
	routing,
	user
})

export default rootReducer