import React from 'react'
import { Button } from '@mui/material'
import "../Assests/userpage.css"
const ButtonComp = ({email,password,name}) => {
  const onClick = ()=>{
    // !generate authentication token
  }
  return (
    <Button style={{margin:'15px'}}className="button" variant="contained" onClick={onClick}>Submit</Button>
  )
}

export default ButtonComp;
