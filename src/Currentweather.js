import React from "react";
import "./Currentweather.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Currentweather() {
  return (
    <div>
      <h1> Location </h1>
      <p>Date</p>
      <p>Time</p>
      <div className="weather">
        <ReactAnimatedWeather
          icon="CLOUDY"
          color="white"
          size={100}
          animate="true"
        />{" "}
        <i className="fas fa-umbrella"></i>
      </div>
      <p>Description Weather </p>
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-4">
            <div className="legend">Temperature</div>
            <div className="currentInfo">
              <span>0</span>°/<span>10</span>°
            </div>
          </div>
          <div className="col-md-4">
            <div className="legend">Humidity</div>
            <div className="currentInfo">0%</div>
          </div>
          <div className="col-md-4">
            <div className="legend">Wind</div>
            <div className="currentInfo">0 km/h</div>
          </div>
        </div>
      </div>
    </div>
  );
}
