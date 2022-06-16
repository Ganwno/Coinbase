import React, { useState } from 'react'
import { AiOutlineRight } from "react-icons/ai"
import { BiWallet, BiPencil } from "react-icons/bi"
import { GrBitcoin } from "react-icons/gr"
import "./pay.css"

const Pay = ({ balance }) => {
  const [state, setState] = useState(1);

  const togglehandler = (index) => {
    setState(index);
  }
  return (
    <div className='main-pay'>
      <div className='pay-container'>
        <div className='pay-tabs'>
          <div className={`${state === 1 ? 'tab active-tab':'tab'}`} onClick={() => togglehandler(1)}>Send</div>
          <div className={`${state === 2 ? 'tab active-tab':'tab'}`} onClick={() => togglehandler(2)}>Recieve</div>
        </div>

        <div className='pay-contents'>
          <div className={`${state === 1 ? 'cnt active-cnt' : 'cnt'}`} >
            <div className='btns'>
              <input type='number' placeholder='0' className='Amount' />
              <button className='btn3'>Pay<GrBitcoin size={20} /> Bitcoin <AiOutlineRight /> </button>
              <button className='btn4'>To <BiWallet size={20} /> <input placeholder='Account' /> </button>
              <button className='btn4'>Note <BiPencil size={20} /> <input placeholder='Message' /> </button>
              
              <button className='btn5'> Send Bitcoin </button>

              <p> Balance:${balance}</p>
            </div>
          </div>

          <div className={`${state === 2 ? 'cnt active-cnt' : 'cnt'}`}>
            <div className='btns'>
              <input type='number' placeholder='0' className='Amount' />
              <button className='btn3'>Get <GrBitcoin size={20} /> Bitcoin  <AiOutlineRight /> </button>
              <button className='btn4'>Add to <BiWallet size={20} /> Wallet  <AiOutlineRight /> </button>
              <button className='btn5'> Recieve Bitcoin </button>

              <p> Balance: ${balance}</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Pay