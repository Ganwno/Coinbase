import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./signin.css"
import { auth } from "../../firebase-config"
import { createUserWithEmailAndPassword } from "firebase/auth"

const Signin = () => {
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPass] = useState("")
  //const [loginEmail, setLoginEmail] = useState("")
  //const [loginPass, setLoginPass] = useState("")

  const register = async () => {

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword,
      );
      console.log(user);
    } catch (err) {
      console.log(err.message);
    }
  }

  const navigate = useNavigate("")

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
        <form>
          <input placeholder='Email' onChange={(event) => {
            setRegisterEmail(event.target.value)
          }} />

          <input placeholder='Password' onChange={(event) => {
            setRegisterPass(event.target.value)
          }} />

          <button onClick={register}>
            Sign In With Email
          </button>

        </form>
      </div>


    </div>
  )
}

export default Signin