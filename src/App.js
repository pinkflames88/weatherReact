import React from "react";
import Weather from "./WeatherSearch.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="card">
        <Weather defaultCity="Milan" />

        <footer>
          <a
            href="https://github.com/pinkflames88/WeatherReact"
            target="_blank"
            rel="noopener noreferrer"
          >
            Designed by Naomi G
          </a>
          <div class="card-footer"></div>
        </footer>
      </div>
    </div>
  );
}
