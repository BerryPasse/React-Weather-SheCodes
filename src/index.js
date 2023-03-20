import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WeatherSearch from "./WeatherSearch";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />

    <WeatherSearch />
    <footer>
      a href ="https://github.com/BerryPasse/React-Weather-SheCodes"Open Source
      Code
    </footer>
  </StrictMode>
);
