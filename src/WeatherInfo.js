import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1 className="city" id="city-value">
        {props.data.city}
      </h1>
      <h2 className="day-time">
        <FormattedDate date={props.data.date} />
      </h2>
      <div className="row">
        <div className="col-6 text-center">
          <img className="current-icon" src={props.data.iconURL} alt="Sunny" />

          <h1 className="current-temp">
            {Math.round(props.data.temperature)}°
          </h1>

          <span className="units">
            <a href="/">C</a> | <a href="/">F</a>
          </span>
          <div className="current-hi-low">
            <strong>28°</strong>/<div>21°</div>
          </div>
        </div>

        <div className="conditions">
          <div className="col-6">
            <strong className="text-capitalize">
              {props.data.description}
            </strong>
            <br />
            <br />
            <strong>Humidity</strong> <br />
            <div>{props.data.humidity}%</div>
            <strong>Wind</strong>
            <div>{props.data.wind}kmh</div>
          </div>
        </div>
      </div>

      <section>
        <div className="row five-hours"></div>
      </section>
    </div>
  );
}
