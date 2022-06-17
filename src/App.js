import './App.css';
import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router , Routes ,Route} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Signin from './Components/Signin/Signin';
import Assets from './Components/Assets/Assets';
import Deposit from './Components/Deposit/Deposit';
import Pay from './Components/Pay/Pay';
import Trade from './Components/Trade/Trade';
import Error from './Components/Redirect/Error';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase-config';
import Signup from './Components/Signin/Signup';


function App() {
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

    let balance  = 0;
    showcoins.forEach(value => {
      balance += parseInt(value.price);
    })

  return (
    <div className="App">
      <Router>
      
      <Routes>

      <Route path='/home' element={<> <Sidebar />  <div className='d1'> <Navbar header={"Assets"} /> <Assets balance={balance} /> </div>  </>} />
      <Route path='/assets' element={<> <Sidebar /> <div className='d2'> <Navbar header={"Assets"} /> <Assets balance={balance} /> </div>    </>} />
      <Route path='/trade' element={<> <Sidebar /> <div className='d3'> <Navbar header={"Trade"} /> <Trade /> </div>   </>} />
      <Route path='/pay' element={<> <Sidebar /> <div className='d4'><Navbar header={"Pay"} /> <Pay  balance={balance}/> </div>  </>} />
      <Route path='/deposit' element={<> <Sidebar /><div className='d5'><Navbar header={"Deposit"} /> <Deposit balance={balance} /> </div>  </>} />
      <Route path='/*' element={<>   <Error />  </>} />
      <Route path='/' element={ <>  <Signup /> </> }/>
      <Route path='/login' element={ <>  <Signin /> </> }/>

      </Routes>
      
      </Router> 
    </div>
  );
}

export default App;
 