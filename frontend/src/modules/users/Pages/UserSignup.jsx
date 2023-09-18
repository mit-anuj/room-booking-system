import React from 'react'
import Appbar from '../Shared/AppBar'
import { Grid, Paper } from '@mui/material';
import OAuthSignup from '../components/OAuthSignup';
const UserSignup = () => {
  return (
    <>
      <Appbar/>
      <Grid spacing={1}>
        <Paper style={{height:"25rem"}}elevation={15} className='container'>
          <OAuthSignup/>
        </Paper>
      </Grid>
    </>
  )
}

export default UserSignup
