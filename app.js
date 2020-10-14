
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (!address) {
    console.log("A location is required.")
} else {
    geocode(address, (error, {lat, lon, location} = {}) => {
        if (error) {
            return console.log(error);
        }

        forecast(lat, lon, (error, forecastData) => {

            if (error) {
                return console.log(error);
            }
            console.log(location);
            console.log(forecastData);
        })
    })

}