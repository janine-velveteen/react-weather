import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import UnitConversion from "./UnitConversion";

export default function WeatherInfo(props) {
  return (
    <div>
      <h1 className="city">
        {props.data.city}
      </h1>
      <h2 className="day-time">
        <FormattedDate date={props.data.date} />
      </h2>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
          <div className="float-left">
            <WeatherIcon code={props.data.icon} />
          </div>

          <UnitConversion celsius={props.data.temperature} />

          
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
      </div>

    
  );
}
