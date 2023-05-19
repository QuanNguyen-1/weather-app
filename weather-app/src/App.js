import React, { useState } from "react";
import "./App.css";
function App() {
  const apiKey = "75018d5303edd5fa81dccd786c85e7dc";
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");
  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=imperial&APPID=" +
          apiKey
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          setCity("");
        });
    }
  };
  const searchh = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&APPID=" +
        apiKey
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        setCity("");
      });
  };

  return (
    <div className="container">
      <input
        className="input"
        placeholder="Enter City..."
        onChange={(e) => setCity(e.target.value)}
        value={city}
        onKeyDown={getWeather}
      />
      <button className="button" onClick={searchh}>
        Search
      </button>

      {typeof weatherData.main === "undefined" ? (
        <div>
          <p>Enter a city to get the weather</p>
        </div>
      ) : (
        <div className="weather-data">
          <p className="city">{weatherData.name}</p>
          <p className="temp">{Math.round(weatherData.main.temp)}° F</p>
          <p className="weather">{weatherData.weather[0].main}</p>
          <div className="other">
            <p className="humidity">
              Humidity: {Math.round(weatherData.main.humidity)} %
            </p>
            <p className="wind">
              Wind: {Math.round(weatherData.wind.speed)} MPH
            </p>
          </div>
        </div>
      )}

      {weatherData.cod === "404" ? <p>City is invalid.</p> : <></>}
    </div>
  );
}

export default App;
