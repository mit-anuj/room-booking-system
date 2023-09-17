import React from 'react'
import OAuth from '../components/OAuth'
import "../Assests/userpage.css";
import { Grid, Paper } from '@mui/material';
const UserPage = () => {
  return (
    <Grid  spacing={1}>
      <Paper elevation={10} className='container'>
        <OAuth />
      </Paper>
    </Grid>
  )
}

export default UserPage;
