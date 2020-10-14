require("dotenv").config();
const request = require("postman-request");

const forecast = (lat, lon, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=" + process.env.weather_key + "&query=" + lon + ","+ lat + "&units=f"
  
    request({ url: url, json: true }, (error, response) => {
      if (error) {
        callback("Unable to connect to weather service.", undefined);
      } else if (response.body.error) {
        callback("Unable to find location. Try a different search.", undefined);
      } else {
        callback(undefined,  "It is currently " + response.body.current.temperature + " degrees out. The real feel is " + response.body.current.feelslike + " degrees.")
      }
    });
  };
  
  module.exports = forecast