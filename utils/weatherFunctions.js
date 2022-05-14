const axios = require("axios");
// const dotenv = require("dotenv");
// dotenv.config();
const weatherApiKey = process.env.WEATHER_API_KEY;
const getWeatherDetailsByCity = (city) => {
    const options = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/weather',
        params: {
            q: `${city},ro`,
            lat: '0',
            lon: '0',
            callback: 'test',
            lang: 'ro',
            units: 'metric',
            mode: 'xml'
        },
        headers: {
            'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
            'X-RapidAPI-Key': weatherApiKey
        }
    };

    axios.request(options).then(function (response) {
        return response.data;
    }).catch(function (error) {
        console.error(error);
        return error;
    });
}

module.exports = {
    getWeatherDetailsByCity
}