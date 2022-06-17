import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./signin.css"
import { auth } from "../../firebase-config"
import { createUserWithEmailAndPassword } from "firebase/auth"


const Register = ({ setState }) => {
    const navigate = useNavigate("")

    const [Email, setRegisterEmail] = useState("")
    const [Password, setRegisterPassword] = useState("")

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth, Email, Password
            );
            console.log(user);
            alert("You are Signed Up");
            setState(true);
        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <div className='signin'>
            <div className='main-div'>
                <h3>Sign in to Coinbase </h3>

                <button onClick={() => { navigate("/home") }}>
                    Continue as Guest
                </button>

                <p>OR</p>
            </div>


            <div className='form-div'>
                <input placeholder='Email' onChange={(event) => {
                    setRegisterEmail(event.target.value)
                }} />

                <input placeholder='Password' onChange={(event) => {
                    setRegisterPassword(event.target.value)
                }} />

                <button onClick={register}>
                    Sign In With Email
                </button>
                <p> Already have an account ? <a href='/login'> login here </a> </p>

            </div>

        </div>
    )
}

export default Register