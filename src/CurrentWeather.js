import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import FormattedDate from "./FormattedDate";

export default function CurrentWeather(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <p>
        <FormattedDate date={props.data.date} />
      </p>
      <div className="weather">
        <ReactAnimatedWeather
          icon="CLOUDY"
          color="white"
          size={100}
          animate="true"
        />{" "}
      </div>
      <p className="currentDescription">{props.data.description}</p>
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-4">
            <div className="legend">Temperature</div>
            <div className="currentInfo">
              <span>{Math.round(props.data.mintemperature)}</span>°/
              <span>{Math.round(props.data.maxtemperature)}</span>°
            </div>
          </div>
          <div className="col-md-4">
            <div className="legend">Humidity</div>
            <div className="currentInfo">{props.data.humidity}%</div>
          </div>
          <div className="col-md-4">
            <div className="legend">Wind</div>
            <div className="currentInfo">
              {Math.round(props.data.wind)} km/h
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
