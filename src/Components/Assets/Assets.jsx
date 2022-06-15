import React from 'react'
import Tab from '../Tabs/Tab'
import Graph from './Graph'
import Table from './Table'
import Wishlist from './Wishlist'
import "../Modal/modal.css"


const Assets = ({balance}) => {

  return (
    <div className='asset'>
      <div className='asset-table'>
            <Graph balance={balance} />
            <Table />
            <Wishlist />
        </div>
        <div className='asset-tab'>
              <Tab />
        </div>
    </div>
  )
}

export default Assets