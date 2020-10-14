require('dotenv').config()
const request = require("postman-request")

const map_url = "https://api.mapbox.com/geocoding/v5/mapbox.places/berlin.json?access_token=" + process.env.mapbox_key

// changed for error handling exercise
const weather_url = "http://api.weatherstack.com/current?access_key=" + process.env.weather_key + "&query=" + process.env.my_zip + "&units=f"

request({ url: weather_url, json: true }, (error, response) => {
    // console.log(response.body.current)
    if (error) {
        console.log('Unable to process request :(');
    } else if (response.body.error) {
        console.log(response.body.error.info)

    } else {
        console.log("It is currently " + response.body.current.temperature + " degrees out. The real feel is " + response.body.current.feelslike + " degrees.");
    }

})

request({ url: map_url, json: true }, (error, response) => {
    if (error) {
        console.log("Could not connect to location services")
    } else if (response.body.features.length === 0) {
        console.log('the location service could not find anything');
    } else {
        console.log("Coords for " + response.body.features[0].place_name);
        console.log("lat= " + response.body.features[0].center[1]);
        console.log("lon= " + response.body.features[0].center[0]);
    }
})