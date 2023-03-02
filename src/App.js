import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Weather from "./WeatherSearch.js";
import "./App.css";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Milan" />

        <footer>
          <a
            href="https://github.com/pinkflames88/WeatherReact"
            target="_blank"
            rel="noopener noreferrer"
          >
             <br> 
            Designed by Naomi G </br>
         <div class="card-footer"> 
         </dov>
         </footer>
    


      </div>
    </div>
  );
}