import logo from './logo.png';
import './App.css';
import PriceCard from './Components/Card';
import NavBar from './Components/NavBar';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Container } from '@material-ui/core';
import Counters from './Components/Counter';
function App() {
  const [Data, setData] = useState({
    low: 0,
    high: 0,
    last: 0,
  });
  const [Count, setCount] = useState(0);
  const [Loading, setLoading] = useState(true);

  useEffect(()=>{
    async function getDogecoinPrice() {
      const { data } = await axios.get(
        'https://nitinr-cors.herokuapp.com/https://api.wazirx.com/api/v2/tickers/dogeusdt'
      );
      setData(data.ticker);
      setLoading(false)
    }
    getDogecoinPrice();
    setInterval(() => getDogecoinPrice(), 10000);

    setInterval(()=>{
      setCount(Count+1)
    },1000)
  })
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

      <Container>
        
      </Container>
    </div>
  );
}

export default App;
