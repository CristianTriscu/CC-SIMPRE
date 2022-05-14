const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();
const weatherApiKey = process.env.WEATHER_API_KEY;
const getWeatherDetailsByCity = async (city) => {
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
    let responnse = "empty response"
    try {
        const value = await axios.request(options);
        if (value.status === 200) {
            let dataToReturn = value.data.replace("test(", "");
            dataToReturn = JSON.parse(dataToReturn.replace(")", ""));

            return dataToReturn;
        }
    } catch (error) {
        console.error(error);
        return error;
    }
    return responnse;

}

module.exports = {
    getWeatherDetailsByCity
}