import React from 'react'
import Tab from '../Tabs/Tab'
import "./modal.css"

const Modal = ({ show }) => {
  if(!show){
    return null
  }
  return (
    <div className='modal'>
        <div className='contain'>
          <Tab />
        </div>
    </div>
  )
}

export default Modal