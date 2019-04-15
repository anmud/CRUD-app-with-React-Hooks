import React, { useState } from 'react';
import './App.css';
import UserTable from './UserTable'
import AddUserForm from './AddUserForm'
import EditUserForm from './EditUserForm'


const App = () =>  {

  const [users, setUsers] = useState([
  { id: 1, name: 'Tania', username: 'floppydiskette' },
  { id: 2, name: 'Craig', username: 'siliconeidolon' },
  { id: 3, name: 'Ben', username: 'benisphere' },
])


const addUser = user => {
  user.id = users.length + 1
  setUsers([...users, user])
}

const deleteUser = id => {
  setUsers(users.filter(user=> user.id !== id))
}

const [editing, setEditing] = useState(false)

const [currentUser, setCurrentUser] = useState({
  id: null,
  name: '',
  username: '',
})

const editRow = user => {
  setEditing(true)
  setCurrentUser({...currentUser, id: user.id, name: user.name, username: user.username})
}

const updateUser = (id, updatedUser) => {
  setEditing(false)
  setUsers(users.map(user => (user.id === id ? updatedUser : user)))
}
    return ( 
      <div>
         <h1>CRUD App with Hooks</h1>
      <div >
       {editing ? (
         <div>
           <h2>Edit User</h2>
           <EditUserForm 
           editing={editing}
           setEditing={setEditing}
           currentUser={currentUser}
           updateUser={updateUser}
           />
           </div>
       ) : (
        <div >
          <h2>Add user</h2>
          <AddUserForm addUser={addUser}/>
        </div>
       )}
        </div>
        <div >
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
        </div>
       
     

      </div>
    );
}

export default App;
