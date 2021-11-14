import { useState, useEffect } from 'react';
import AppBar from './components/appBar/AppBar';
import UsersGrid from './components/usersGrid/UsersGrid';
import SingleUserView from './components/singleUserView/SingleUserView';

import usersData from './api/users.js';

import './App.css';
import { Routes, Route } from 'react-router-dom';


function App() {
  
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const data = await usersData.get();
      setUsers(data.data);
      console.log(data.data);
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
      <Routes>
        <Route exact path="/" element={<UsersGrid users={users} />} />
        <Route path="/:id" element={<SingleUserView />} />
      </Routes>
    </div>
  );
}

export default App;
