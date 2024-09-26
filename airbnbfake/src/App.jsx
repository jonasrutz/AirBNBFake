import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <div className="logo"></div>
        <div className="navigation">
          <span class="nav1">Unterkünfte</span>
          <span class="nav2">Entdeckungen</span>
        </div>
        <div className="account">
          <img src="" alt="" className="burgermenue" />
          <img src="" alt="" className="profilepicture" />
        </div>
        <div className="search">
          <div className="wohin">$
            <h3>Wohin</h3>
            <p>Reiseziel suchen</p>
          </div>
          <div className="Checkin">
          <h3>Check-in</h3>
          <p>Datum</p>
          </div>
          <div className="Checkout">
          <h3>Check-out</h3>
          <p>Datum</p>
          </div>
          <div className="wer">
            <h3>Wer</h3>
            <p>Gäste hinzufügen</p>
          </div>
        </div>
      </header>
    </>
  )
}

export default App
