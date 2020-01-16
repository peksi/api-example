import React, { useState } from "react";
import "./App.css";

export const Name = () => {
  const [countries, setCountries] = useState([]);

  const handleClick = () => {
    const name = document.getElementById("nameInput").value;
    fetch("https://api.nationalize.io?name=" + name)
      .then(res => res.json())
      .then(json => {
        console.log(
          json.country.map(i => i.country_id).filter(i => i.length > 0)
        );
        setCountries(
          json.country.map(i => i.country_id).filter(i => i.length > 0)
        );
      });
  };

  return (
    <div className="nameRow">
      <input id="nameInput" type="text" />
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Get propability
      </button>
      {countries.map(i => {
        return (
          <img
            src={"https://www.countryflags.io/" + i + "/flat/64.png"}
            alt={"Flag for " + i}
          />
        );
      })}
    </div>
  );
};
