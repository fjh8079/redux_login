import React from 'react'

class UserList extends React.Component {

	render() {
		const { users } = this.props

	    return (
	        <ul>
        	{
        		users
        		? (
        			users.map((item, i) => {
        				return <li key={i}>{item.ID} {item.name}</li> 
        			})
    			): null
        	}
	        </ul>
	    )

    }

}

export default UserList
