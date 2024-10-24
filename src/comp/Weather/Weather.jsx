import React, { useEffect, useRef, useState } from "react";
import cloud from "../../Assets/cloud.png";
import clear from "../../Assets/clear.png";
import drizzle from "../../Assets/drizzle.png";
import rain from "../../Assets/rain.png";
import search_icon from "../../Assets/search.png";
import wind from "../../Assets/wind.png";
import humidity from "../../Assets/humidity.png";
import snow from "../../Assets/snow.png";

import "./Weather.css";
const Weather = () => {
  const [weather, setWeatherData] = useState(false);

  const inputRef = useRef();
  const allIcons = {
    "01d": clear,
    "01n": clear,
    "02d": cloud,
    "02n": cloud,
    "03d": cloud,
    "03n": cloud,
    "04d": drizzle,
    "04n": drizzle,
    "09d": rain,
    "09n": rain,
    "10d": rain,
    "10n": rain,
    "13d": snow,
    "13n": snow,
  };
  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=98cc2e02ab0fc22d0c208b31440b990e`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const icon = allIcons[data.weather[0].icon] || clear_icon;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {}
  };

  useEffect(() => {
    search("Grecja");
  }, []);
  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" placeholder="Search" ref={inputRef} />
        <img
          src={search_icon}
          alt=""
          onClick={() => search(inputRef.current.value)}
        />
      </div>
      <img src={weather.icon} alt="" className="weather-icon" />
      <p className="temperatuer">{weather.temperature}°C</p>
      <p className="location">{weather.location}</p>
      <div className="weather-data">
        <div className="col">
          <img src={weather.icon} alt="" />
          <div>
            <p>{weather.humidity} %</p>
            <span>humidity</span>
          </div>
        </div>{" "}
        <div className="col">
          <img src={wind} alt="" />
          <div>
            <p>{weather.windSpeed} Km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
