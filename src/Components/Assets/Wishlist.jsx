import React from 'react'
import "./wishlist.css"

const Wishlist = () => {
  return (
    <div className='wishlist'>
        <p> Wishlist </p>

<table>
<tr>
      <th>Name</th>
      <th>Past 24h</th>
      <th>Price</th>
      <th>Change</th>
      <th>Market Cap</th>
      <th>Watch</th>
    </tr>
    <tr>
      <td>Bitcoin</td>
      <td> ------ </td>
      <td>$2734.21</td>
      <td>56.20%</td>
      <td>$1234.33</td>
      <td><button id='buybtn'>Buy</button></td>
    </tr>

    <tr>
      <td>Bitcoin</td>
      <td> --^-^- </td>
      <td>$2734.21</td>
      <td>56.20%</td>
      <td>$1234.33</td>
      <td><button id='buybtn'>Buy</button></td>
    </tr>

    <tr>
      <td>Bitcoin</td>
      <td> ------ </td>
      <td>$2734.21</td>
      <td>56.20%</td>
      <td>$1234.33</td>
      <td><button id='buybtn'>Buy</button></td>
    </tr>

    <tr>
      <td>Bitcoin</td>
      <td> ------ </td>
      <td>$2734.21</td>
      <td>56.20%</td>
      <td>$1234.33</td>
      <td><button id='buybtn'>Buy</button></td>
    </tr>

</table>
    </div>
  )
}

export default Wishlist