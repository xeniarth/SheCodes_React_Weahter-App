import React, { useState } from "react";

export default function CurrentTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div>
        <div className="legend">
          <span className="unit">
            °C |{" "}
            <a href="/" onClick={showFahrenheit}>
              {" "}
              °F{" "}
            </a>
          </span>
        </div>
        <div className="currentInfo">
          <span>{Math.round(props.tempdata.min)}</span>/
          <span>{Math.round(props.tempdata.max)}</span>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="legend">
          <span className="unit">
            <a href="/" onClick={showCelsius}>
              °C
            </a>{" "}
            | °F{" "}
          </span>
        </div>
        <div className="currentInfo">
          <span>{Math.round((props.tempdata.min * 9) / 5 + 32)}</span>/
          <span>{Math.round((props.tempdata.max * 9) / 5 + 32)}</span>
        </div>
      </div>
    );
  }
}
