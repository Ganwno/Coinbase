import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./signin.css"
import { auth } from "../../firebase-config"
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"

const Signin = () => {
  const [registeremail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPass] = useState("")
  //const [loginEmail, setLoginEmail] = useState("")
  //const [loginPass, setLoginPass] = useState("")
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registeremail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error);
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
        <input placeholder='Email' onChange={(e) => {
          setRegisterEmail(e.target.value)
        }} />

        <input placeholder='Password' onChange={(e) => {
          setRegisterPass(e.target.value)
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