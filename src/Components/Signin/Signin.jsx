import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./signin.css"
import { auth } from "../../firebase-config"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

const Signin = () => {
    const navigate = useNavigate("")

    const [loginEmail, setLoginEmail] = useState("")
    const [loginPass, setLoginPass] = useState("")

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth, loginEmail, loginPass
            );
            console.log(user)
            navigate("/home")
            localStorage.setItem("name", auth.currentUser.email);
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
                            setLoginEmail(event.target.value)
                        }} />

                        <input placeholder='Password' onChange={(event) => {
                            setLoginPass(event.target.value)
                        }} />

                        <button onClick={login}>
                            Login
                        </button>
            </div>

        </div>
    )
}

export default Signin