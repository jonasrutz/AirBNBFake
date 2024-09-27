import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <footer>
        <div class="footer-container">
          <div class="footer-column">
            <h4>Unterstützung</h4>
            <ul>
              <li>Hilfe-Center</li>
              <li>AirCover</li>
              <li>Antidiskriminierung</li>
              <li>Barrierefreiheit</li>
              <li>Stornierungsmöglichkeiten</li>
              <li>Nachbarschaft: Problem melden</li>
            </ul>
          </div>

          <div class="footer-column">
            <h4>Gastgeben</h4>
            <ul>
              <li>Als Gastgeber:in loslegen</li>
              <li>AirCover für Gastgeber:innen</li>
              <li>Infos für Gastgeber:innen</li>
              <li>Community-Forum</li>
              <li>Verantwortungsvolles Gastgeben</li>
              <li>Kostenlose Kurse zum Thema Gastgeben</li>
            </ul>
          </div>

          <div class="footer-column">
            <h4>Airbnb</h4>
            <ul>
              <li>Pressebereich</li>
              <li>Neue Funktionen</li>
              <li>Karriere</li>
              <li>Investor:innen</li>
              <li>Notunterkünfte über Airbnb.org</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
