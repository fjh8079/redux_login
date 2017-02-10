import React from 'react'
import { connect } from 'react-redux';
import { getUsers, createUser } from '../actions/user';
import UserList from '../components/UserList'

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

		this.props.dispatch(createUser(data))
	}

	render() {
		const { users } = this.props

	    return (
	        <div>
	        	<h1>Users</h1>
	        	<div>
	        		<input type='text' ref='name'/>
	        		<div onClick={this._handleCreateUser.bind(this, 'name')}>新增</div>
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
