import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Weather defaultCity="Toronto" />
        </header>
       <Footer />
      </div>
    </div>
  );
}

export default App;
