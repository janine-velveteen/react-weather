import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "7e7e5efa2f72ec4fd3d79d3ec63162cc";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="all">
          <form className="search-bar" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search city here"
              autoComplete="off"
              autoFocus="on"
              onChange={updateCity}
            />
            <input type="submit" value="Search 🔍" />
            
          </form>
          <WeatherInfo data={weatherData} />
          <WeatherForecast city={weatherData.city}/>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
