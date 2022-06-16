import "./assets.css"
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase-config';

const Table = ({ balance,showcoins }) => {

  const sell = async (id) => {
    const userdoc = doc(db, "coins", id);
    await deleteDoc(userdoc);
  }


  return (
    <div className='div1'>
      <p> Your Assets </p>

      <table>
        <tr>
          <th>Name</th>
          <th>Balance</th>
          <th>Price</th>
          <th>Sell</th>
        </tr>

        {
          showcoins.map((mycoin) => {
            return (
              <>
                <tr>
                  <td id="td1"><img src={mycoin.icon} alt="/" /> {mycoin.name}</td>
                  <td id="td2">${balance}</td>
                  <td>{'$'}{Math.round(mycoin.price)}</td>
                  <td><button id="sell-btn" onClick={() => {
                    sell(mycoin.id);
                  }}>Sell</button></td>
                </tr>
              </>
            )
          })
        }

      </table>
    </div>
  )
}

export default Table