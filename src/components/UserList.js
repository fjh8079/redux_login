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
        				return (
                            <li key={i}>
                                <span className='num'>{item.ID}</span> 
                                <span>{item.name}</span>
                            </li>
                        )
        			})
    			): null
        	}
	        </ul>
	    )

    }

}

export default UserList
