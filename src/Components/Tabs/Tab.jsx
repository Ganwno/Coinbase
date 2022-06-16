import React, { useState } from 'react'
import "./tab.css"
import { AiOutlineRight  } from "react-icons/ai"
import { GrBitcoin } from "react-icons/gr"
import { AiFillDollarCircle } from 'react-icons/ai'

const Tab = ({ balance }) => {
  const [togglestate, setTogglestate] = useState(1);
  const toggleTab = (index) =>{
      setTogglestate(index);
  }
  return (
    <div className='main-tab'>
    <div className='container'>
      <div className='tabs'>
        <div className={`${togglestate === 1 ? 'tab active-tab':'tab' }`} onClick={() => toggleTab(1)}> Buy  </div>
        <div className={`${togglestate === 2 ? 'tab active-tab':'tab' }`} onClick={() => toggleTab(2)} > Sell  </div>
        <div className={`${togglestate === 3 ? 'tab active-tab':'tab' }`}  onClick={() => toggleTab(3)}> Convert </div>
      </div>

      <div className='contents'>
        <div className={`${togglestate === 1 ? 'content active-content':'content' }`} >
        <div className='btns'>
        <input type='number' placeholder='0' className='Amount' />
        <button className='btn3'>Buy  <GrBitcoin size={20} /> Bitcoin  <AiOutlineRight /> </button>
        <button className='btn4'>With <AiFillDollarCircle size={20} />  Wallet  <AiOutlineRight /> </button>
        <button className='btn5'> Buy Bitcoin </button>

        <p> Balance: ${balance}</p>
        </div>
        </div>

        <div className={`${togglestate === 2 ? 'content active-content':'content' }`}>
        <div className='btns'>
        <input type='number'  placeholder='0' className='Amount' />
        <button className='btn3'>Sell <GrBitcoin size={20} /> Bitcoin  <AiOutlineRight /> </button>
        <button className='btn4'>Add <AiFillDollarCircle size={20} /> Wallet  <AiOutlineRight /> </button>
        <button className='btn5'> Sell Bitcoin </button>

        <p> Balance: ${balance}</p>
        </div>
        </div>

        <div className={`${togglestate === 3 ? 'content active-content':'content' }`} >
        <div className='btns'>
        <input type='number' placeholder='0' className='Amount' />
        <button className='btn3'>From  <GrBitcoin size={20} /> Bitcoin  <AiOutlineRight /> </button>
        <button className='btn4'>To <AiFillDollarCircle size={23} /> Wallet  <AiOutlineRight /> </button>
        <button className='btn5'> Convert Bitcoin </button>

        <p> Balance: ${balance}</p>
        </div>
        </div>

      </div>

    </div>

    </div>
  )
}

export default Tab