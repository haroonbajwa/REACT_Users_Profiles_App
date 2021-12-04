import { useState, useEffect } from 'react';
import AppBar from './components/appBar/AppBar';
import CircularProgress from '@mui/material/CircularProgress';
import UsersGrid from './components/usersGrid/UsersGrid';
import SingleUserView from './components/singleUserView/SingleUserView';

import usersData from './api/users.js';

import './App.css';
import { Routes, Route } from 'react-router-dom';


function App() {
  
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const [searchTerm, setSearchTerm] = useState("");

  const usersPerPage = 6;
  const [totalPages, setTotalPages] = useState();
  const pagesVisited = (pageNumber-1) * usersPerPage;

  const getUsers = async () => {
    try {
      setLoading(true);
      const data = await usersData.get();
      setUsers(data.data.slice(pagesVisited, pagesVisited + usersPerPage));
      setTotalPages(Math.ceil(data.data.length / usersPerPage));
      setLoading(false);
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getUsers();
  }, [,pageNumber]);


  return (
    <div className="App">
      <AppBar setSearchTerm={setSearchTerm} />
      {loading ? <CircularProgress size="5rem" style={{marginTop:'50vh'}} /> :
        <Routes>
        <Route exact path="/"
          element={<UsersGrid users={users}
            setPageNumber={setPageNumber}
            totalPages={totalPages}
            pageNumber={pageNumber}
            searchTerm={searchTerm}
            />} />
        <Route path="/:id" element={<SingleUserView />} />
      </Routes>
      }
      
    </div>
  );
}

export default App;
