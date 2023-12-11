import React from 'react'
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

export const Notification = ({ handleClose, show, alertText }) => {
    return <Box sx={{ width: 500 }}>
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={show.open}
            onClose={handleClose}  sx={{position: 'fixed', zIndex: 1500}}>
            <Alert severity='info' sx={{ width: '100%' }}> {show.alertText} </Alert>
        </Snackbar>
    </Box>
}
