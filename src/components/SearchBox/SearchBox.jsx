

import "./SearchBox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import Info from "../InfoBox/InfoBox";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("Delhi"); // Initialize city with "Delhi"
  let [error, setError] = useState(false);

  let API_URL = "https://api.openweathermap.org/data/2.5/weather";

  let getWeather = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric`
      );

      let responseJson = await response.json();
      let result = {
        city: city,
        temp: responseJson.main.temp,
        tempMin: responseJson.main.temp_min,
        tempMax: responseJson.main.temp_max,
        feels_like: responseJson.main.feels_like,
        weather: responseJson.weather[0].description,
        humidity: responseJson.main.humidity,
      };
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleCity = (event) => {
    setCity(event.target.value);
  };

  useEffect(() => {
    // Call handleSubmit when the component mounts
    handleSubmit();
  }, []); // Empty dependency array means it runs only once after the initial render

  let handleSubmit = async (event) => {
    try {
      if (event) event.preventDefault();
      setCity("");
      let newInfo = await getWeather();
      updateInfo(newInfo);
      setError(false);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="searchBox">
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          onChange={handleCity}
          value={city}
          required
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{ color: "red" }}>No such place exists!</p>}
      </div>
    </form>
  );
}

