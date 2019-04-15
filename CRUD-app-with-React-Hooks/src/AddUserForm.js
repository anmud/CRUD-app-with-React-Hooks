import React, { useState } from 'react';


const AddUserForm = (props) =>  {

const [user, setUser] = useState({
    id: null, 
    name: '',
    username: '',
})
 
const handleInputChange = event => {
    const {name, value} = event.target
    setUser({...user, [name]: value})
}

    return (
      <div>
        <form
         onSubmit={event => {
            event.preventDefault()
            if(!user.name || !user.username) return

            props.addUser(user)
            setUser({user})
        }}
        >
  <label>Name</label>
  <input type="text" name="name" value={user.name} onChange={handleInputChange} />

  <label>Username</label>
  <input type="text" name="username" value={user.username} onChange={handleInputChange} />

  <button>Add new user</button>
</form>
      </div>
    );
}

export default AddUserForm;
