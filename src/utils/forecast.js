require("dotenv").config();
const request = require("postman-request");

const forecast = (lat, lon, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=" +
    process.env.weather_key +
    "&query=" +
    lat +
    "," +
    lon +
    "&units=f";

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to connect to weather service.", undefined);
    } else if (body.error) {
      callback("Unable to find location. Try a different search.", undefined);
    } else {
      callback(
        undefined,
        "It is currently " +
          body.current.temperature +
          " degrees out. The real feel is " +
          body.current.feelslike +
          " degrees."
      );
    }
  });
};

module.exports = forecast;
