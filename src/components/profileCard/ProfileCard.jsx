import React from 'react';
import { Button, Grid, Paper } from '@mui/material';

import './profileCard.css';
import { Link } from 'react-router-dom';
import { returnSingleUserId } from '../../api/user';

const ProfileCard = ({ user }) => {
    return (
        
        <Grid item xs={2} sm={4} md={4}>
            <Paper className="paper" elevation={3}>
            <div>
                <img src="https://img.icons8.com/office/80/000000/user.png" alt="user"/>
            </div>
            <div className="userDetail">
                <p><b>Name:</b> {user.name}</p>
                <p><b>Username:</b> {user.username}</p>
                <p><b>Address:</b> {user.address.street}, {user.address.city}</p>
                {/* <p><b>Phone:</b> {user.phone.split('x')[0]}</p>
                <p><b>Email:</b> {user.email}</p>
                <p><b>Website:</b> <a href={user.website}>{user.website}</a></p> */}
            </div>
            <Link to={`/${user.id}`}  style={{textDecoration:'none', color:'white'}}>
                <Button color="primary" variant="contained">
                    More
                </Button>
            </Link>
            </Paper>
        </Grid>
        
    )
}

export default ProfileCard
