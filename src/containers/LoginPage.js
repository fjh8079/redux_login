import React from 'react'
import { connect } from 'react-redux';
import { changeLoginData, login } from '../actions/login.js';
import Login from '../components/Login'

class LoginPage extends React.Component {

	constructor(props) {
		super(props)
		this._handleSetAccount = this._handleSetAccount.bind(this)
		this._handleSetPassword = this._handleSetPassword.bind(this)
		this._handleSubmit = this._handleSubmit.bind(this)
	}

	_mergeWithCurrentState(change) {
		return Object.assign(this.props.data, change);
	}

	emitChange(newState) {
		this.props.dispatch(changeLoginData(newState))
	}

	_handleSetAccount(e) {
		let newState = this._mergeWithCurrentState({
			name: e.target.value.trim()
		})

	    this.emitChange(newState)
	}

	_handleSetPassword(e) {
		let newState = this._mergeWithCurrentState({
			pwd: e.target.value.trim()
		})

	    this.emitChange(newState)
	}

	_handleSubmit() {
		this.props.dispatch(login(this.props.data))
	}

	render() {

	    return (
	        <div>
	        	<Login 
	        		onSetAccount={this._handleSetAccount} 
	        		onSetPassword={this._handleSetPassword}
	        		onLogin={this._handleSubmit} />
	        </div>
	    )

    }

}

function mapStateToProps(state) {
	return {
		data: state.login.loginData
	}
}

export default connect(mapStateToProps)(LoginPage)
