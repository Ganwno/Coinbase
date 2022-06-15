import React from 'react'
import "./transfer.css"
import { AiOutlineRight  } from "react-icons/ai"


const Transfer = () => {
  return (
    <div className='transfer'>
        
        <div className='btns'>
        <button id='btn3'>Buy  <img src="" alt="" /> Bitcoin  <AiOutlineRight /> </button>
        <button id='btn4'>With <img src="" alt="" /> Wallet  <AiOutlineRight /> </button>

        <button id='btn5'> Buy Bitcoin </button>
        <p> Balance: $26671</p>
        </div>
        
    </div>
  )
}

export default Transfer