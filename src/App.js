import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Baltimore" />

        <footer>
          <a href="https://github.com/BerryPasse/React-Weather-SheCodes">
            Sonya B's Open Code
          </a>
        </footer>
      </div>
    </div>
  );
}
