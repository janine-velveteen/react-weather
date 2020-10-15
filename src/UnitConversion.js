import React, { useState } from "react";

export default function UnitConversion(props) {
  const [units, setUnits] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnits("celsius");
  }

  if (units === "celsius") {
    return (
      <div className="UnitConversion">
        <span>
          {" "}
          <h1 className="current-temp">{Math.round(props.celsius)}°</h1>
        </span>
        <span className="units">
          C |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="UnitConversion">
        <span>
          {" "}
          <h1 className="current-temp">{Math.round(fahrenheit)}°</h1>
        </span>
        <span className="units">
          <a href="/" onClick={convertToCelsius}>
            C
          </a>{" "}
          | F
        </span>
      </div>
    );
  }
}
