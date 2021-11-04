import React from 'react';
import { Button, Grid, Icon, Paper } from '@mui/material';

import './profileCard.css';

const ProfileCard = ({ user }) => {
    return (
        
        <Grid item xs={2} sm={4} md={4} key={user.id}>
            <Paper className="paper" elevation={3}>
            <div>
                <img src="https://img.icons8.com/office/80/000000/user.png"/>
            </div>
            <div className="userDetail">
                <p><b>Name:</b> {user.name}</p>
                <p><b>Username:</b> {user.username}</p>
                <p><b>Address:</b> {user.address.street}, {user.address.city}</p>
                {/* <p><b>Phone:</b> {user.phone.split('x')[0]}</p>
                <p><b>Email:</b> {user.email}</p>
                <p><b>Website:</b> <a href={user.website}>{user.website}</a></p> */}
            </div>
            <Button color="primary" variant="contained">More</Button>
            </Paper>
        </Grid>
        
    )
}

export default ProfileCard
