import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducers'
import { routerReducer } from 'react-router-redux'

const loggerMiddleware = createLogger()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore(preloadedState) {
	return createStore(
		rootReducer,
		preloadedState,
		composeEnhancers(
			applyMiddleware(
				thunkMiddleware,
				loggerMiddleware
			)
		)
	)
}