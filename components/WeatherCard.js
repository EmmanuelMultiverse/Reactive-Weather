import React from "react";
import sunny from "../assets/Sunny.svg";
import rainy from "../assets/Rainy.svg";
import cloudy from "../assets/Cloudy.svg";
import partlyCloudy from "../assets/PartlyCloudy.svg";

export const getWeatherIcon = (forecast) => {
  if (forecast === "Rainy") {
    return rainy;
  } else if (forecast === "Cloudy") {
    return cloudy;
  } else if (forecast === "Partly cloudy") {
    return partlyCloudy;
  } else {
    return sunny;
  }
};

function WeatherCard({city}) {
  console.log(city);
  return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" src={getWeatherIcon(city.forecast)} alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">{city.city}</h3>
            <h5 className="card-text">{city.temperature}</h5>
            <h5 className="card-text">{city.forecast}</h5>
        </div>
    </div>
  );
};

// Export the WeatherCard

export default WeatherCard;