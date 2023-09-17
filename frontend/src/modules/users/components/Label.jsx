import React from 'react'
import { TextField } from '@mui/material';
import "../Assests/userpage.css"

const Label = (props) => {
  let value ="";
  return (
    <>
      <TextField style={{marginBottom:"15px"}}className="textfield"id="standard-basic" label={props.label} variant="standard" value={value} placeholder={props.lebel}/>
    </>
  )
}

export default Label
