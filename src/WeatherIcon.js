import React, { useState, useEffect } from "react";
import ReactAnimatedWeather from "react-animated-weather";
import Spinner from "./Spinner";

export default function WeatherIcon(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [iconCode, setIconCode] = useState("");

  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

  useEffect(() => {
    setIsLoading(true);
    setIconCode("");
    // Simulate a delay in fetching the icon
    setTimeout(() => {
      setIconCode(codeMapping[props.code]);
      setIsLoading(false);
    }, 2000);
  }, [props.code]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ReactAnimatedWeather
      icon={iconCode}
      color="#1e1e1e"
      size={props.size}
      animate={true}
    />
  );
}
