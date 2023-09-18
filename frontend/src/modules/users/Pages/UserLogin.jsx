import React from 'react'
import OAuth from '../components/OAuth'
import "../Assests/userpage.css";
import { Grid, Paper } from '@mui/material';
import Appbar from '../Shared/AppBar';
const UserLogin = () => {
  return (
    <>
      <Appbar />
      <Grid spacing={1}>
        <Paper elevation={15} className='container'>
          <OAuth />
        </Paper>
      </Grid>
    </>
  )
}

export default UserLogin;
