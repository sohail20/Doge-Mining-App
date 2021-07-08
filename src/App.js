import logo from './logo.png';
import './App.css';
import PriceCard from './Components/Card';
import NavBar from './Components/NavBar';
import { useEffect,useState } from 'react';
import axios from 'axios';

function App() {
  const [Data, setData] = useState({
    low: 0,
    high: 0,
    last: 0,
  });
  const [Loading, setLoading] = useState(true);

  useEffect(()=>{
    setInterval(()=>{
      axios.get("https://nitinr-cors.herokuapp.com/https://api.wazirx.com/api/v2/tickers/dogeusdt").then((res)=>{
        setData(res.data.ticker)
        setLoading(false)
      })
      .catch((err)=>{
        setLoading(false)
      })
    },1000)
  },[Data])
  return Loading?<p>Loading...</p>:(
    <div >
      <NavBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="prices-container">
          <PriceCard type="high" price={Data.high}/>
          <PriceCard type="low" price={Data.low}/>
          <PriceCard type="current" price={Data.last}/>
        </div>
      </header>
    </div>
  );
}

export default App;
