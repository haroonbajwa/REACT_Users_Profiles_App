import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

import './addUserForm.css';

const AddUserForm = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button variant="contained" color="primary" style={{float:'right'}} onClick={handleOpen}>Add User</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="modalBox">
                

                <form >
                    <Typography variant="h6" align="center">
                        Add New User
                    </Typography>
                    <hr style={{width:'40%'}} />
                    <TextField
                        id="name"
                        label="Name"
                        variant="standard"
                        type="text"
                        fullWidth
                        autoFocus
                        className="field"
                        margin="normal"
                    />
                    <TextField
                        id="username"
                        label="Username"
                        variant="standard"
                        type="text"
                        fullWidth
                        className="field"
                        margin="normal"
                    />
                    <TextField
                        id="address"
                        label="Address"
                        variant="standard"
                        type="text"
                        fullWidth
                        className="field"
                        margin="normal"
                    />
                    <TextField
                        id="phone"
                        label="Phone"
                        variant="standard"
                        type="number"
                        fullWidth
                        className="field"
                        margin="normal"
                    />
                    <TextField
                        id="email"
                        label="Email"
                        variant="standard"
                        type="email"
                        fullWidth
                        className="field"
                        margin="normal"
                    />
                    <TextField
                        id="company"
                        label="Company"
                        variant="standard"
                        type="text"
                        fullWidth
                        className="field"
                        margin="normal"
                    />
                    <TextField
                        id="website"
                        label="Website"
                        variant="standard"
                        type="text"
                        fullWidth
                        className="field"
                        margin="normal"
                    />
                    
                    <Button
                        variant="contained"
                        color="primary"
                        style={{marginTop:'20px', float:'right'}}
                    >
                        Submit
                    </Button>
                </form>

                </Box>
            </Modal>
        </div>
    )
}

export default AddUserForm
