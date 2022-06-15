import React from 'react'
import "./sidebar.css"
import "../Modal/modal.css"
import { MdPayment } from "react-icons/md" 
import { HiOutlineTrendingUp } from "react-icons/hi"
import { AiFillPieChart  } from "react-icons/ai"
import { BsCashCoin } from "react-icons/bs"

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='links'>

          <h1>Coinbase</h1>

          <div className='assets'>
          <AiFillPieChart size={20} />
          <a href='/assets'> <p>Assets </p> </a>
          </div>
        
          <div className='trade'>
          <HiOutlineTrendingUp size={20} />
          <a href='/trade'> <p>Trade</p> </a>
          </div>

          <div className='pay'>
          <MdPayment size={20} />
          <a href='/pay'> <p>Pay </p> </a>
          </div>

          <div className='deposit'>
          <BsCashCoin size={20} />
          <a href='/deposit'> <p>Deposit</p> </a>
          </div>

        </div>
    </div>
  )
}

export default Sidebar