import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Weather />
        </header>
        <footer>
          Life in the Clouds
          <br />
          <a href="https://github.com/janine-velveteen/react-weather">
            Open-Sourced Code
          </a>{" "}
          by Janine Marsh
        </footer>
      </div>
    </div>
  );
}

export default App;
