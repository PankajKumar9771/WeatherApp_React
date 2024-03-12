import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function Info({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1688891982761-3f71afab4754?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const RAINY_URL =
    "https://media.istockphoto.com/id/1407348197/photo/water-drops-on-the-glass-concept-of-driving-in-rain-bad-driving-conditions-selective-focus.jpg?s=1024x1024&w=is&k=20&c=nsPbzr9_S7goHZKjQD5-fHxSRZxA-HQG7yoDHD5jJEo=";
  const HOT_URL =
    "https://plus.unsplash.com/premium_photo-1661592854834-56c693beaed7?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1579847641267-5445b760b991?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  // let info = {
  //   city: "Delhi",
  //   temp: 23,
  //   tempMin: 23,
  //   tempMax: 34,
  //   feels_like: 24,
  //   weather: "haze",
  //   humidity: 56,
  // };
  return (
    <div className="info-box">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="Weather_Img"
          height="140"
          image={
            info.humidity > 80 ? RAINY_URL : info.temp > 15 ? HOT_URL : COLD_URL
          }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
            {info.humidity > 80 ? (
              <ThunderstormIcon />
            ) : info.temp > 15 ? (
              <WbSunnyIcon />
            ) : (
              <AcUnitIcon />
            )}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="span">
            <p>Temparature: {info.temp}&deg;C</p>
            <p>Humidity : {info.humidity}</p>
            <p>Min-Temp: {info.tempMin}&deg;C</p>
            <p>Max-Temp: {info.tempMax}&deg;C</p>

            <p>
              The weather can be describe as <i>{info.weather}</i> and
              feels_like : {info.feels_like}&deg;C
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
