import React, { useState,useEffect } from 'react';
import './App.css'
import UserList from './UserList.jsx';
import UserForm from './UserForm.jsx';


import { getUsers } from './services/api';

function App() {
  const [users,setUsers] =useState([]);
  const [currentUser,setCurrentUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  },[]);

  const fetchUsers = async () => {
    const response = await getUsers();
    setUsers(response.data);

  };
  const handleEdit = (user) => {
    setCurrentUser(user);
  };
  
  const handleSave = () => {
    setCurrentUser(null);
    fetchUsers();
  };

  return (
    <div className= "container">
      <h1>User Management</h1>
      <UserForm currentUser={currentUser} onSave={handleSave} />
      <UserList users={users} onEdit={handleEdit} fetchUsers={fetchUsers} />
    </div>
  );
};

  
  


export default App
