import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [menuJson, setMenuJson] = useState({});

  useEffect(() => {
    fetch(
      "https://kitchen.kanttiinit.fi/restaurants/52/menu?day=2020-01-16&lang=en"
    );
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Let's do an api request</p>
      </header>
    </div>
  );
}

export default App;
