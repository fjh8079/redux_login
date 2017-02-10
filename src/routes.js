import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import LoginPage from './containers/LoginPage'
import UserPage from './containers/UserPage'

const routes = (
	<Route path="/" component={App}>
		<Route path='login' component={LoginPage}/>
		<IndexRoute component={UserPage} />
	</Route>
)

export default routes
