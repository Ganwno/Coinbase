import React, { useState, useEffect } from "react";
import "./wishlist.css"
import {collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';
import Axios from "axios";

const Wishlist = () => {
  const [listcoins, setListCoins] = useState([]);

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins").then((response) => {
      setListCoins(response.data.coins);
    })
  }, [])

  const coinref = collection(db, "coins");

  const buy = async (coin) => {
    await addDoc(coinref, { name: coin.symbol, price: coin.price, icon: coin.icon })
  }

  return (
    <div className='wishlist'>
      <p> Wishlist </p>

      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Change</th>
          <th>Market Cap</th>
          <th>Watch</th>
        </tr>

        {
          listcoins.slice(0, 5).map((coin) => {
            return (
              <>
                <tr>
                  <td id='td1'><img src={coin.icon} alt="/" /> {coin.symbol}</td>
                  <td>{'$'}{Math.round(parseInt(coin.price))}</td>
                  <td>{coin.priceChange1h}%</td>
                  <td>{'$'}{Math.trunc(coin.marketCap)}</td>
                  <td><button id='buybtn' onClick={() => {buy(coin)}}>Buy</button></td>
                </tr>
              </>
            )
          })
        }



      </table>
    </div>
  )
}

export default Wishlist