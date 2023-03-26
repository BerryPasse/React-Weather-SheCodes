import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Baltimore" />

        <footer>
          {" "}
          Sonya B's Open Code
          <a href="https://github.com/BerryPasse/React-Weather-SheCodes"></a>
        </footer>
      </div>
    </div>
  );
}
