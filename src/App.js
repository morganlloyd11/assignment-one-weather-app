import React from 'react';
// IMPORT USE STATE FOR SEARCH
import { useState } from "react";
// IMPORT COMPONENT
import WeatherDisplay from './components/WeatherDisplay';
// IMPORT DATA
import locations from "./data/locations.json"
// IMPORT STYLESHEET
import './styles/App.css';

function App() {

  //setting state for the search bar to store user input and update search value
  const [search, setSearch] = useState(""); 

  return (
    <div className='app'>

      <h1 className='title'> Weather App </h1>

      {/* <WeatherDisplay location="Calgary" temperature="-30" weather="Snowy"/> */}

      {/* SEARCH BAR */}
      {/* value is set to search state and updates it when user enters something */}
      <input 
        type="text" 
        placeholder="enter city name here"
        value = {search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input" />


      {/* WEATHER INFO */}
      {/* filter through the cities that match the value of the search, doing toLowerCase to avoid any case sensitive issues. Then map through each of the locations imported JSON data and display the WeatherDisplay component with the city, temp, weather of them all  */}

      {locations
        // filter for case insensitive search
        .filter((each) => each.city.toLowerCase().includes(search.toLowerCase()))
        //show a componenet for the matching city
        .map((each, index) => (
          <WeatherDisplay 
            key={index} 
            city={each.city}
            temperature={each.temperature} 
            weather={each.weather} 
          />
))}

    </div>
  );
}

export default App;
