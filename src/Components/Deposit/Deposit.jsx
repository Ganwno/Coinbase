import React, { useState } from 'react'
import "./deposit.css"
import { AiFillDollarCircle } from 'react-icons/ai'
import { AiOutlineRight } from "react-icons/ai"

const Deposit = ({ balance }) => {
  const [state, Setstate] = useState(1);
  const [val, setVal] = useState(0);
  const togglehandler = (index) => {
    Setstate(index);
  }

  const addcash = () => {
    setVal(balance + val);
  }
  const withdrawcash = () => {
    setVal(balance - val);
  }
  return (
    <div className='main-depo'>
      <div className='depo-container'>
        <div className='depo-tabs'>
          <div className={`${state === 1 ? 'tab active-tab' : 'tab'}`} onClick={() => togglehandler(1)}>Add Cash</div>
          <div className={`${state === 2 ? 'tab active-tab' : 'tab'}`} onClick={() => togglehandler(2)}>CashOut</div>
        </div>

        <div className='depo-contents'>
          <div className={`${state === 1 ? 'cnt active-cnt' : 'cnt'}`} >
            <div className='btns'>
              <input type='number' placeholder='$0' className='Amount' onChange={(e) => { setVal(parseInt(e.target.value)) }} />
              <button className='btn3'>Pay With <AiFillDollarCircle size={20} /> Wallet <AiOutlineRight /> </button>

              <button className='btn5' onClick={addcash}> Add Cash</button>

              <p> Balance: ${val}</p>
            </div>
          </div>

          <div className={`${state === 2 ? 'cnt active-cnt' : 'cnt'}`}>
            <div className='btns'>
              <input type='number' placeholder='$0' className='Amount' onChange={(e) => { setVal(parseInt(e.target.value)) }} />
              <button className='btn3'> With <AiFillDollarCircle size={20} /> Wallet  <AiOutlineRight /> </button>
              <button className='btn5' onClick={withdrawcash}> Cash Out </button>

              <p> Balance: ${val}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Deposit