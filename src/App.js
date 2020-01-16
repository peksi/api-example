import React, { useEffect, useState } from "react";
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
        <div className="imageArray">
          {menuJson.map(item => {
            return (
              <img key={item.id} src={item.thumbnailUrl} alt="Placholder" />
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
