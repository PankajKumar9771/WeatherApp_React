import Info from "../../components/InfoBox/InfoBox";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useState } from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Wonderland",
    temp: 12,
    tempMin: 23,
    tempMax: 34,
    feels_like: 24,
    weather: "zhae",
    humidity: 56,
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App</h2>
      <SearchBox updateInfo={updateInfo} />
      <Info info={weatherInfo} />
    </div>
  );
}
