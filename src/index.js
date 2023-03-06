import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Weather.css";
import "./App.css";
import WeatherSearch from "./WeatherSearch.js";
import App from "./App";

const rootElement = document.getElementById("root");
const root = rootElement;

root.render(
  <StrictMode>
    <div className="App">
      <h1>Weatherly</h1>
      <WeatherSearch />
    </div>
  </StrictMode>
);
