import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import AddUserForm from '../addUserForm/AddUserForm';
import ProfileCard from '../profileCard/ProfileCard';
import PostsPagination from '../pagination/UsersPagination';

import './usersGrid.css';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function UsersGrid({ users, pageNumber, setPageNumber, totalPages, searchTerm }) {
  return (
    <div className="usersGrid">
      <AddUserForm />
      <Box sx={{ flexGrow: 1 }} style={{margin: '50px 0px'}}>
          <Grid container spacing={{ xs: 3, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  {users.filter((val => {
                    if(searchTerm === "") {
                      return val;
                    } else if(val.name.toLowerCase().includes(searchTerm?.toLowerCase())) {
                      return val;
                    }
                  })).map((user, i) => (
                      <ProfileCard user={user} key={i} />
                  ))}
          </Grid>
      </Box>
      {searchTerm === "" && (
        <PostsPagination pageNumber={pageNumber} setPageNumber={setPageNumber} totalPages={totalPages}/>
      )}
    </div>
  );
}
