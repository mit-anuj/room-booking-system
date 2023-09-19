import React, { useState } from 'react'
import Label from './Label'
import '../Assests/userpage.css';
import ButtonComp from './ButtonComp';
const OAuth = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  return (
    <>
      <h1>LOGO</h1>
      <h3>Room Booking Manager</h3>
      <div>
        <Label type="email" label="Email" setEmail ={setEmail} value = {email}/>
        <Label type="password" label="Password" setPassword={setPassword} value = {password}/>
      </div>
      <ButtonComp email = {email} password = {password}/>
    </>
  )
}

export default OAuth
