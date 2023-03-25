import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter city name"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn-btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Stockholm</h1>
      <ul>
        <li> Monday 8:30</li>
        <li> Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="https://www.google.com/search?q=google+weather&rlz=1C1WNOO_enUS956US956&oq=google+weather&aqs=chrome..69i57j69i64.2440j0j15&sourceid=chrome&ie=UTF-8" />
          6°C
        </div>
        <div className="col-6">
          <ul>
            <li> Percipitation </li>
            <li> Humidity </li>
            <li> Windy 15 km/h% </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
