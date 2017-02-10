import React from 'react'

require('../../assets/stylesheets/login.scss');

class Login extends React.Component {
	render() {
		const { onSetAccount, onSetPassword, onLogin } = this.props

	    return (
	        <div>
	        	<div className="form-group">
					<label htmlFor="account">Account</label>
					<input type="text" className="form-control" id="account" placeholder="Account" onChange={onSetAccount} />
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input type="password" className="form-control" id="password" placeholder="Account" onChange={onSetPassword} />
				</div>
				<div>
					<a className="btn btn-default btn-block" href="#" role="button" onClick={onLogin}>Login</a>
				</div>
	        </div>
	    )

    }

}

export default Login
