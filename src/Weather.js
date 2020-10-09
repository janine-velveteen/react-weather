import React from "react";

export default function Weather() {
  return (
    <div className="App">
      <div className="all">
        <form className="search-bar">
          <input
            type="text"
            placeholder="Search city here"
            autoComplete="off"
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
              src="http://openweathermap.org/img/wn/01d@2x.png"
              alt="Sunny"
              className="float-left"
            />
            <h1 className="current-temp">27°</h1>

            <span className="units">
              <a href="/">C</a> |<a href="/">F</a>
            </span>
            <div className="current-hi-low">
              <strong>28°</strong>/<div>21°</div>
            </div>
          </div>

          <div className="conditions">
            <div className="col-6">
              <i className="fas fa-tint"></i>
              <strong>Humidity</strong> <br />
              <div>0%</div>
              <i className="fas fa-wind"></i>
              <strong>Wind</strong>
              <div>14kmh</div>
            </div>
          </div>
        </div>

        <section>
          <div className="row five-hours"></div>
        </section>

        <footer>
          Life in the Clouds
          <br />
          <a href="https://github.com/janine-velveteen/react-weather">
            Open-Sourced Code
          </a>
          by Janine Marsh
        </footer>
      </div>
    </div>
  );
}
