import React from "react";
import "./Prediction.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Prediction() {
  return (
    <div className="row day1">
      <div className="col-md-4 weatherIcon my-auto">
        <ReactAnimatedWeather
          icon="CLEAR_DAY"
          color="white"
          size={42}
          animate="true"
        />{" "}
      </div>
      <div className="col-md-2 weekday my-auto">Monday</div>
      <div className="col-md-2 my-auto">
        <span>21</span>°/<span>19</span>°
      </div>
      <div className="col-md-2 my-auto">30%</div>
      <div className="col-md-2 my-auto">40 km/h</div>
    </div>
  );
}
