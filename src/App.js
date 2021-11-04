import { useState, useEffect } from 'react';
import AppBar from './components/appBar/AppBar';
import UsersGrid from './components/usersGrid/UsersGrid';

import posts from './api/users.js';

import './App.css';


function App() {
  
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const data = await posts.get();
      setUsers(data.data);
      console.log(users);
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      
      <AppBar />
      <UsersGrid users={users} />
    </div>
  );
}

export default App;
