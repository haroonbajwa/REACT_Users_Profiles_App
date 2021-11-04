import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ProfileCard from '../profileCard/ProfileCard';

import './usersGrid.css';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function UsersGrid({ users }) {
  return (
    <div className="usersGrid">
    <Box sx={{ flexGrow: 1 }} style={{margin: '50px 0px'}}>
        <Grid container spacing={{ xs: 3, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {users.map((user, i) => (
                    <ProfileCard user={user} />
                ))}
        </Grid>
    </Box>
    </div>
  );
}
