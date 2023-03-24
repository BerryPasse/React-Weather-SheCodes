import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />

    <Weather />
  </StrictMode>
);
