import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Button, Grid, Typography } from '@mui/material'

import Post from './post/Post'

import { returnSingleUser as user } from '../../api/user'
import { returnPosts as posts } from '../../api/posts'

import './singleUserView.css';

const SingleUserView = () => {


    const [profile, setProfile] = useState(null);
    const [postsData, setPostsData] = useState(null);

    const { id } = useParams();

    const getPosts = async () => {
        try {
          const data = await posts(id);
          setPostsData(data.data);
          console.log(data.data);
        } catch(e) {
          console.log(e);
        }
      }

    useEffect(()=>{
        const getData = async () => {
            const data = await user(id);
            setProfile(data.data);
        }
        getData();
        getPosts();
    },[])

    return (
        profile && (
        <>
            <Grid container spacing={3} className="container">
                <Grid item xs={12} sm={6} md={4}>
                    <img src="https://img.icons8.com/office/200/000000/user.png" alt="user"/>
                </Grid>
                <Grid item xs={12} sm={6} md={4} className="user-details">
                    <table>
                        <tbody>
                        <tr>
                            <th>Name:</th>
                            <td>{profile?.name}</td>
                        </tr>
                        <tr>
                            <th>Username:</th>
                            <td>{profile?.username}</td>
                        </tr>
                        <tr>
                            <th>Address:</th>
                            <td>{profile?.address.street}, {profile?.address.city}</td>
                        </tr>
                        <tr>
                            <th>Phone:</th>
                            <td>{profile?.phone.split('x')[0]}</td>
                        </tr>
                        <tr>
                            <th>Email:</th>
                            <td>{profile?.email}</td>
                        </tr>
                        <tr>
                            <th>Company:</th>
                            <td>{profile?.company?.name}</td>
                        </tr>
                        <tr>
                            <th>Website:</th>
                            <td><a href={`https://${profile?.website}`} target="_blank">{profile?.website}</a></td>
                        </tr>
                        </tbody>
                    </table>
                    {/* <p><b>Name:</b> {profile?.name}</p>
                    <p><b>Username:</b> {profile?.username}</p>
                    <p><b>Address:</b> {profile?.address.street}, {profile?.address.city}</p>
                    <p><b>Phone:</b> {profile?.phone.split('x')[0]}</p>
                    <p><b>Email:</b> {profile?.email}</p>
                    <p><b>Website:</b> <a href={user.website}>{profile?.website}</a></p> */}
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Button className="button" variant="contained" color="primary">EDIT</Button>
                    <Button className="button" variant="contained" color="secondary">DELETE</Button>
                </Grid>
            </Grid>

            <Typography variant="h4" className="title">Posts</Typography>
            <Grid container spacing={6} className="container">
                {postsData?.map((post, i) => (
                    <Grid item xs={12} sm={6} md={4} key={i}>
                        <Post post={post} />
                    </Grid>
                ))   
                }
                
            </Grid>

        </>
        )
        
    )
}

export default SingleUserView
