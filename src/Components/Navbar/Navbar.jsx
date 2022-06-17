import React, { useState } from 'react'
import "./navbar.css"
import "../Modal/modal.css"
import Modal from '../Modal/Modal';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase-config';
import { signOut } from 'firebase/auth';

const Navbar = ({header}) => {
  const [name, setName] = useState("G")
  
  const navigate = useNavigate("");

  const signout = async () => {
    await signOut(auth);
  }


  const [show, setShow] = useState(false)
  return (
    <div className='main' >
        <div className='navbar'>
        
        <div className='header'>
        <h2> {header} </h2>
        </div>

        <div className='buttons'>
        
        <button id='btn1' onClick={() => setShow(true)}>Buy/Sell</button>
        <Modal show={show}>

        </Modal>
        <button id='btn2' onClick={() => {navigate("/pay")}}> Send/Recieve </button>
        <button id='btn3' onClick={signout}>{name}</button>
        </div>  
        
    </div>
         
    </div>
  )
}

export default Navbar