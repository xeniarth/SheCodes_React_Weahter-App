import React, { useState } from "react";
import "./Searchbar.css";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";

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
      date: new Date(response.data.dt * 1000),
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
        <CurrentWeather data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
