import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes'

import configureStore from './configureStore'

const store = configureStore()

const history = syncHistoryWithStore(browserHistory, store)


render(
	<Provider store={store}>
		<div>
			<Router history={history}>
                { routes }
            </Router>
		</div>
	</Provider>,
	document.getElementById('main-app')
)