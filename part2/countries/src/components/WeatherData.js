import { useEffect, useState } from "react";
import axios from "axios";

const WeatherData = (props) => {
  const [weatherData, setWeatherData] = useState(null);
  console.log(process.env);
  const api_key = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    axios
      .get(
        `https://openweathermap.org/data/2.5/weather?q=${props.capital}&appid=${api_key}`
      )
      .then((res) => {
        console.log(res.data);
        setWeatherData(res.data);
      });
  }, []);

  if (weatherData) {
    const imageLink = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    return (
      <div>
        <h1>Weather in {props.capital}</h1>
        <p>Temperature {weatherData.main.temp} Celcius</p>
        <img src={imageLink} alt="weather" />
        <p>Wind {weatherData.wind.speed} m/s</p>
      </div>
    );
  }
};

export default WeatherData;
