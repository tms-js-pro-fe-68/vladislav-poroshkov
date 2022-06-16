import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import DataLoading from "./components/DataLoading";
import CustomHook from "./components/CustomHook";
import BruteForce from "./components/BruteForce";

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('blue')
  
  const changeColorClick = () => {
      if (color === 'blue') {
        return setColor('green');
      }
      return setColor('blue');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          <button
              style={{
                display: 'block',
                margin: '10px auto',
                padding: '15px 30px',
                  borderRadius: '10px',
                backgroundColor: color,
                color: 'white',
              }}
              type="button" onClick={() => {
            changeColorClick();
            setCount(count + 1);
          }}>
            count is: {count}
          </button>
        </p>
      </header>
        <CustomHook/>
        <DataLoading/>
        <BruteForce email=''/>{/*У меня нету юзера на нашем ресурсе*/}
    </div>
  )
}

export default App
