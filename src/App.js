import React from "react";
import spinner from "./Spinner";

import Weather from "./Weather.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Milan" />

        <footer>
          <p>Designed by Naomi G</p>
          <div className="card-footer">
            <a
              href="https://github.com/pinkflames88/WeatherReact"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="warm-melomakarona-c950da.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              hosted on Netlify
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
