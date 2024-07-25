import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Input } from "reactstrap";
import "./weather.css";
function Weather() {
  const [data, setData] = useState(null);
  const [text, setText] = useState("");
  const [city, setCity] = useState("Ho Chi Minh");
  const apikey = "2fc5d91c9a915f37ea97ab2098c55719";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;
  const getinfo = () => {
    axios.get(url).then(function (res) {
      setData(res.data);
      console.log(res.data);
    });
  };
  const getTime = (x) => {
    let d = new Date(x * 1000);
    return d.toLocaleString();
  };
  useEffect(() => {
    getinfo();
  }, [city]);
  return (
    <div className="container">
                        <div className="BOX1"></div>
                        <div className="BOX2"></div>
      <div className="box ">
        <Card className="inputbox ">
          <div className="width=100% d-flex">
            <Input
              className="input"
              type="text"
              value={text}
              placeholder="City..."
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key == "Enter") {
                  setCity(e.target.value);
                  setText("");
                }
              }}
            ></Input>
            <Button className="btn btn-success">O</Button>
          </div>
        </Card>

        <Card className="card-new">
          <div className="d-flex align-content-center justify-content-around">
            {data && (
              <div className="INFO">
                <div>
                  <h1 className="text-center">{data.name}</h1>
                </div>
                <div className="d-flex justify-content-around">
                  <div>
                    <p>
                      <i class="fa-solid fa-map-pin"></i> City: {data.name}
                    </p>
                    <p>Sunrise:{getTime(data.sys.sunrise)}</p>
                    <p>Sunset:{getTime(data.sys.sunset)}</p>
                    <p>country: {data.sys.country}</p>
                    <h1>
                      {data.main.temp}&deg;C |{" "}
                      {((data.main.temp * 9) / 5 + 32).toFixed(2)}&deg;F{" "}
                    </h1>

                    <h2>{data.weather[0].main}</h2>
                    <p>
                      <i></i>City: {data.name}
                    </p>
                    <p>{(data.main.temp + 273.15).toFixed(2)} &deg;kelvin</p>
                    <p>{data.weather[0].description}</p>
                  </div>

                  <img
                    src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                  ></img>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Weather;
