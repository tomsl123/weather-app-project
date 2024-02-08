import {getWeatherAndCityInformation} from "./getWeatherAndCityInformation.js";

addEventListener('DOMContentLoaded', () => {
    document.getElementById('search-city').onclick = updateWeatherInformationFromSearch;
});

async function updateWeatherInformationFromSearch() {
    const apiKey = '19df663de78873d8425b36b3fc7d25b6';
    const cityInputValue = document.getElementById('city-input').value;

    let weatherAndCityInfo = [];
    try {
        weatherAndCityInfo = await getWeatherAndCityInformation(apiKey, cityInputValue);
        document.getElementById('error-message').setAttribute('hidden','true');
    }
    catch (e) {
        document.getElementById('search-temperature-info').innerHTML = '';
        document.getElementById('error-message').removeAttribute('hidden');
        return;
    }

    const weatherInfo = weatherAndCityInfo.weatherInfo;
    const cityInfo = weatherAndCityInfo.cityInfo[0];

    const temp = weatherInfo.main.temp;
    const city = cityInfo.name;
    const country = cityInfo.country;

    document.getElementById('search-temperature-info').innerHTML = `Current temperature in ${city}, ${country}: ${temp} °C`
}