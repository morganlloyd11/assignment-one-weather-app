//IMPORT REACT
import React from "react";
//IMPORT STYLES
import "../styles/WeatherDisplay.css";

// weather display component which gets the city, temp, weather as props
const WeatherDisplay = ({ city, temperature, weather }) => {
    return (
        <div className="weather-display">

        <h2>{city}</h2>
        <p>{temperature}</p>
        <p>{weather}</p>

        </div>

    );
};

export default WeatherDisplay;