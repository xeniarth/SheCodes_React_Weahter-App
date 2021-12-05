import React, { useState } from "react";
import "./Searchbar.css";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

export default function Searchbar(props) {
  let [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      mintemperature: response.data.main.temp_min,
      maxtemperature: response.data.main.temp_max,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "e93661b3ab177c374da4a62247b4b062";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div>
        <div>
          <form className="form-inline" onSubmit={handleSubmit}>
            <div className="mb-3">
              <button
                type="checkCurrentLocation"
                className="btn btn-outline-light w-100"
              >
                <i className="fas fa-map-marker-alt"></i> Use current location
              </button>
              <input
                type="city"
                className="form-control text-center"
                placeholder="Enter city"
                autoFocus="on"
                onChange={handleCityChange}
              />{" "}
              <button type="submit" className="btn btn-outline-light w-100">
                <i className="fas fa-search-location"></i> Search
              </button>
            </div>
          </form>
        </div>
        <div>
          <h1>{weatherData.city}</h1>
          <p>Date</p>
          <p>Time</p>
          <div className="weather">
            <ReactAnimatedWeather
              icon="CLOUDY"
              color="white"
              size={100}
              animate="true"
            />{" "}
          </div>
          <p className="currentDescription">{weatherData.description}</p>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4">
                <div className="legend">Temperature</div>
                <div className="currentInfo">
                  <span>{Math.round(weatherData.mintemperature)}</span>°/
                  <span>{Math.round(weatherData.maxtemperature)}</span>°
                </div>
              </div>
              <div className="col-md-4">
                <div className="legend">Humidity</div>
                <div className="currentInfo">{weatherData.humidity}%</div>
              </div>
              <div className="col-md-4">
                <div className="legend">Wind</div>
                <div className="currentInfo">
                  {Math.round(weatherData.wind)} km/h
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
