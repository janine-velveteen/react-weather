import React, { useState } from "react";

import axios from "axios";
import "./WeatherForecast.css";
import ForecastFiveHours from "./ForecastFiveHours";


export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);
    
    function forecastResponse(response) {
        setForecast(response.data);
        setLoaded(true);
    }
    
    if (loaded && props.city === forecast.city.name) {
        return (
            <div className="WeatherForecast row">
                <ForecastFiveHours data={forecast.list[0]} />
                <ForecastFiveHours data={forecast.list[1]} />
                <ForecastFiveHours data={forecast.list[2]} />
                <ForecastFiveHours data={forecast.list[3]} />
                <ForecastFiveHours data={forecast.list[4]} />
                <ForecastFiveHours data={forecast.list[5]} />
            </div>
            
                );
    } else {
    
        let apiKey = "7e7e5efa2f72ec4fd3d79d3ec63162cc";
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`
        axios.get(url).then(forecastResponse);
        
        return null;
    }
}