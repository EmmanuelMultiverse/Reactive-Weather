import React from "react";
import { getWeatherIcon } from "./WeatherCard";

function Location({ data, location }) {
  const cityData = data.find((city) => city.city === location);
  const icon = getWeatherIcon(cityData.forecast);

  return (
    <div className="card">
        <h2>Your Location's Weather</h2>
        <div className="img-container">
            <img className="card-img-top" src={icon} alt="Weather icon" id="icon" />
        </div>
        <div className="card-body">
            <h3 className="card-title">{cityData.city}</h3>
            <h5 className="card-text">{cityData.temperature}</h5>
            <h5 className="card-text">{cityData.forecast}</h5>
        </div>
    </div>
  );
}

export default Location;