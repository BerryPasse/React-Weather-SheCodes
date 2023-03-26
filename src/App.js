import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather Forecast</h1>
        <Weather />
        <footer>
          <a href="https://github.com/BerryPasse/React-Weather-SheCodes"></a>
        </footer>
      </div>
    </div>
  );
}
