import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from 'react-router-dom'
const Appbar = () => {
    const navigate = useNavigate();
    const toLogin = ()=>{
        navigate("/login");
    }
    const toSignup = ()=>{
        navigate("/signup");
    }
  return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography style={{textAlign: "left",}}variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Booking
          </Typography>
          <Button color="inherit" onClick={toLogin}>Login</Button>
          <Button color="inherit" onClick={toSignup}>SignUp</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Appbar;
