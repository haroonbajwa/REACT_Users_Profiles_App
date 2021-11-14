import React from 'react'
import { Paper, Typography } from '@mui/material'

import './post.css'

const Post = ({ post }) => {
    return (
        <Paper elevation={3} className="paper">
            <Typography variant="h5">{post.title}</Typography> <br />
            <Typography variant="body1">{post.body}</Typography>
        </Paper>
    )
}

export default Post
