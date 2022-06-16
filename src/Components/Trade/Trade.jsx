import React, { useEffect, useState } from 'react'
import Tab from '../Tabs/Tab'
import "./trade.css"
import Axios from 'axios'
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase-config';

const Trade = () => {
  const [listcoins, setListCoins] = useState([]);

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins").then((response) => {
      setListCoins(response.data.coins);
    })
  }, [])

  const coinref = collection(db, "coins");
  
  const buy = async(coin) => {
      await addDoc(coinref, { name: coin.symbol, price: coin.price, icon: coin.icon })
  }
  
  return (
    <div className='main-trade'>
      <div className='trade-table'>
        <p> All Assets  </p>

        <table>
          <tr>
            <th id='th1'>Name</th>
            <th>Price</th>
            <th>Change</th>
            <th>Market Cap</th>
            <th>Watch</th>
          </tr>

          {
            listcoins.map((coin) => {
              return (
                <>
                  <tr>
                    <td id='td1'><img src={coin.icon} alt="/" /> {coin.symbol}</td>
                    <td>{'$'}{Math.round(parseInt(coin.price))}</td>
                    <td>{coin.priceChange1h}%</td>
                    <td>{'$'}{Math.trunc(coin.marketCap)}</td>
                    <td><button id='buybtn' onClick={() => {
                       buy(coin);
                    }}>Buy</button></td>
                  </tr>
                </>
              )
            })
          }

        </table>
      </div>

      <div className='trade-tab'>
        <Tab />
      </div>
    </div>
  )
}

export default Trade