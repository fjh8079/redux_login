import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import login from './login'
import user from './user'

const rootReducer = combineReducers({
	login,
	routing,
	user
})

export default rootReducer