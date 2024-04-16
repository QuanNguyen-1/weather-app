import React, { useState } from "react";
import SearchImg from "./components/searchImage";
import "./App.css";
function App() {
  const apiKey = "75018d5303edd5fa81dccd786c85e7dc";
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");
  const [icon, setIcon] = useState("")
  //fetches the weather data about the specific city
  const getWeather = async () => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`);
      const data = await res.json();
      setWeatherData(data);
      setCity("");
      setIcon(data.weather[0].main);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h1 id="title" className="text-center">Weather App</h1>
      <div id="search" className="text-center input-group">
        <input
          className="form-control"
          id="input"
          placeholder="Enter City..."
          onChange={(e) => setCity(e.target.value)}
          value={city}
          onKeyDown={(e) => {
            if (e.key === "Enter"){
              getWeather();
            } 
          }}
        />
        <button className="btn" id="search-btn" onClick={getWeather}>
          Search
        </button>
      </div>
      
      {/*if the weather data undefined and there is no error looking up the city, message is enter a city, else message is error */}
      {typeof weatherData.main === "undefined" ? (
        <div>
          {weatherData.cod === "404" ? <p className="text-center welcome-message">City is invalid</p> : <p className="text-center welcome-message">Enter a city to get the weather</p>}
        </div>
      ) : (
        <div id="weather-data" className="text-center">
          <p id="city">{weatherData.name}</p>
          <p id="temp">{Math.round(weatherData.main.temp)}° F</p>
          <p id="weather">{weatherData.weather[0].main}</p>
          <SearchImg icon={icon}/>
          <div className="other-data">
            <span id="humidity">
              Humidity: {Math.round(weatherData.main.humidity)} %
            </span>
            <span id="wind">
              Wind: {Math.round(weatherData.wind.speed)} MPH
            </span>
          </div>
        </div>
      )}

      
    </div>
  );
}

export default App;
