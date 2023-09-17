import React from 'react'
import Label from './Label'
import '../Assests/userpage.css';
import ButtonComp from './ButtonComp';
const OAuth = () => {
  return (
    <>
      <h1>LOGO</h1>
      <h3>Room Booking Manager</h3>
      <div>
        <Label type="email" label="Email" />
        <Label type="password" label="Password" />
      </div>
      <ButtonComp/>
    </>
  )
}

export default OAuth
