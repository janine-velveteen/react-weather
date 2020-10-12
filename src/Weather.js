import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="App">
        <div className="all">
          <form className="search-bar">
            <input
              type="text"
              placeholder="Search city here"
              autoComplete="off"
              autoFocus="on"
            />
            <input type="submit" value="Search 🔍" />
            <input type="submit" value="📍" />
          </form>

          <h1 className="city" id="city-value">
            Toronto
          </h1>
          <h2 className="day-time">
            <span>Tuesday 16:00</span>
          </h2>
          <div className="row">
            <div className="col-6 text-center">
              <img
                className="current-icon"
                src="http://openweathermap.org/img/wn/01d@2x.png"
                alt="Sunny"
              />

              <h1 className="current-temp">27°</h1>

              <span className="units">
                <a href="/">C</a> | <a href="/">F</a>
              </span>
              <div className="current-hi-low">
                <strong>28°</strong>/<div>21°</div>
              </div>
            </div>

            <div className="conditions">
              <div className="col-6">
                <strong>Sunny</strong>
                <br />
                <br />
                <strong>Humidity</strong> <br />
                <div>0%</div>
                <strong>Wind</strong>
                <div>14kmh</div>
              </div>
            </div>
          </div>

          <section>
            <div className="row five-hours"></div>
          </section>
        </div>
      </div>
    );
  } else {
    const apiKey = "7e7e5efa2f72ec4fd3d79d3ec63162cc";
    let city = "Toronto";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
