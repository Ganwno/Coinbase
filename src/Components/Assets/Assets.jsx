import React, { useState, useEffect } from 'react'
import Tab from '../Tabs/Tab'
import Graph from './Graph'
import Table from './Table'
import Wishlist from './Wishlist'
import "../Modal/modal.css"
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config';


const Assets = ({ balance }) => {
  const [showcoins, setShowCoins] = useState([]);


  useEffect(() => {
    const coinref = collection(db, "coins");
    const getCoins = async () => {
      const Data = await getDocs(coinref);
      setShowCoins(Data.docs.map((doc) => ({
        ...doc.data(), id: doc.id
      })));
    }

    getCoins();
  }, []);


  return (
    <div className='asset'>
      <div className='asset-table'>
        <Graph balance={balance} showcoins={showcoins} />
        <Table balance={balance} showcoins={showcoins} />
        <Wishlist  />
      </div>
      <div className='asset-tab'>
        <Tab balance={balance} />
      </div>
    </div>
  )
}

export default Assets