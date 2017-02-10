import React from 'react'
import { connect } from 'react-redux';
import { getUsers, createUser } from '../actions/user';
import UserList from '../components/UserList'

require('../../assets/stylesheets/user.scss');

class UserPage extends React.Component {

	constructor(props) {
		super(props)
	}

	componentWillMount() {
		this.props.dispatch(getUsers())
	}

	_handleCreateUser(type) {
		let inputValue = this.refs[type].value

		let data = {
			name: inputValue
		}

		if(inputValue !== '') {
			this.props.dispatch(createUser(data))
		}
	}

	render() {
		const { users } = this.props

	    return (
	        <div className='userPage'>
	        	<div className='form-control'>
	        		<input type='text' className='form-control' ref='name'/>
	        		<div className='plus-icon' onClick={this._handleCreateUser.bind(this, 'name')}>＋</div>
	        	</div>
	        	<UserList users={users}/>
	        </div>
	    )

    }

}

function mapStateToProps(state, ownProps) {

	const { login, user } = state

	return {
		login,
		users: user.member
	}
}

export default connect(mapStateToProps)(UserPage)
