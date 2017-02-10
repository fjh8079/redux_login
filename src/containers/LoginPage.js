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
		return Object.assign(this.props.login.loginData, change);
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
		this.props.dispatch(login(this.props.login.loginData))
	}

	render() {
		const { commonData } = this.props
	    return (
	    	<Login 
        		onSetAccount={this._handleSetAccount} 
        		onSetPassword={this._handleSetPassword}
        		onLogin={this._handleSubmit}
        		alertContent={commonData.alertContent} />
	    )

    }

}

function mapStateToProps(state, ownProps) {

	const { login, commonData } = state

	return {
		commonData,
		login
	}
}

export default connect(mapStateToProps)(LoginPage)
