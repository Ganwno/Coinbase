import React, { useState } from 'react'
import "./navbar.css"
import "../Modal/modal.css"
import Modal from '../Modal/Modal';

const Navbar = ({header}) => {
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
        <button id='btn2'> Send/Recieve </button>
        </div>  
        
    </div>
         
    </div>
  )
}

export default Navbar