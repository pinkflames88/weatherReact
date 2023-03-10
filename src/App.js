import React from "react";
import Weather from "./Weather.js";
import "./App.css";
import "./Weather.css";
import "./Card.css";

export default function App() {
  return (
    <div className="app-wrap">
      <div className="container">
        <div className="main">
          <Weather defaultCity="Milan" />
        </div>
      </div>
      <footer>
        <div className="card-footer">
          <a
            href="https://github.com/pinkflames88/WeatherReact"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and <p>Designed by Naomi G</p>
          <a
            href="https://warm-melomakarona-c950da.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </div>
      </footer>
    </div>
  );
}
