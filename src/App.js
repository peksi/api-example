import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [menuJson, setMenuJson] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(json => {
        console.log(json.slice(0, 100));
        setMenuJson(json.slice(0, 100));
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Image gallery</p>
        {menuJson.map(item => {
          return <img src={item.thumbnailUrl} alt="Placholder" />;
        })}
      </header>
    </div>
  );
}

export default App;
