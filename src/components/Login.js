import React from 'react'

require('../../assets/stylesheets/login.scss');

class Login extends React.Component {
	render() {
		const { onSetAccount, onSetPassword, onLogin, alertContent } = this.props

	    return (
	        <div className='loginPage'>
	        	<div className="form-control">
					<label htmlFor="account">Account</label>
					<input type="text" className="form-control" id="account" onChange={onSetAccount} />
				</div>
				<div className="form-control">
					<label htmlFor="password">Password</label>
					<input type="password" className="form-control" id="password" onChange={onSetPassword} />
				</div>
				<div className="btnDiv center">
					<div className='error'>{alertContent ? alertContent : null}</div>
					<div className="btn" onClick={onLogin}>Login</div>
				</div>
	        </div>
	    )

    }

}

export default Login
