import React from 'react'
import { TextField } from '@mui/material';
import "../Assests/userpage.css"

const Label = ({type,label,value,setEmail,setPassword,setName}) => {
  const onchange = (e)=>{
    if(label ==="Email"){
      setEmail( e.target.value);
    }else if(label ==="Password"){
      setPassword( e.target.value);
    }else{
      setName(e.target.value);
    }
  }
  return (
    <>
      <TextField style={{marginBottom:"15px"}} name={label} className="textfield"id="standard-basic" label={label} variant="standard" value={value} placeholder={label} onChange={onchange} type={type}/>
    </>
  )
}

export default Label
