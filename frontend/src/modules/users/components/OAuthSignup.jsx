import React,{useState} from 'react'
import Label from './Label'
import ButtonComp from './ButtonComp'

const OAuthSignup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    return (
        <>
            <h1>LOGO</h1>
            <h3>Room Booking Manager</h3>
            <div>
                <Label type="text" label="Name" value={name} setName ={setName}/>
                <Label type="email" label="Email" value={email} setEmail ={setEmail}/>
                <Label type="password" label="Password" value={password} setPassword ={setPassword}/>
            </div>
            <ButtonComp email={email} password={password} name={name}/>
        </>
    )
}

export default OAuthSignup
