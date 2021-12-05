import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import CurrentTemperature from "./CurrentTemperature";

export default function CurrentWeather(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <p>
        <FormattedDate date={props.data.date} />
      </p>
      <div className="weather">
        <WeatherIcon
          code={props.data.icon}
          size={120}
          alt={props.data.description}
        />
      </div>
      <p className="currentDescription">{props.data.description}</p>
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-4">
            <div className="legend">Temperature</div>
            <CurrentTemperature tempdata={props.data.temp} />
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
