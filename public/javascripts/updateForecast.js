import {fetchUserCity, updateCurrentWeatherInformation} from "./updateCurrentWeatherInformation.js";
import {getWeatherAndCityInformation} from "./getWeatherAndCityInformation.js";

addEventListener('DOMContentLoaded', () => {
    document.getElementById('getCurrent').onclick = async () => {
        await updateCurrentWeatherInformation();
        await updateForecast();
    };
});

async function updateForecast() {
    const apiKey = '19df663de78873d8425b36b3fc7d25b6';
    const city = await fetchUserCity();

    const weatherAndCityInfo = await getWeatherAndCityInformation(apiKey, city);

    const lon = weatherAndCityInfo.cityInfo[0].lon;
    const lat = weatherAndCityInfo.cityInfo[0].lat;

    const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${lat}&lon=${lon}&appid=${apiKey}`)
    const forecast = await forecastResponse.json();

    const dateFormatOptions = {weekday: "short", month: "short", day: "numeric", hour: "numeric", hourCycle: "h12"};
    const forecastContainer = document.getElementById('forecast-cards-container');
    forecastContainer.removeAttribute('hidden');

    for (const forecastElement of forecast.list) {
        const dateString = new Date(forecastElement.dt * 1000).toLocaleDateString('en-UK', dateFormatOptions);
        const weather = forecastElement.weather[0].description;
        const temperature = Math.round(forecastElement.main.temp);

        forecastContainer.appendChild(prepareCard(dateString, weather, temperature));
    }
}

function prepareCard(dateString, weather, temperature) {
    const card = document.createElement('div');
    card.setAttribute('class', 'forecast-container');

    const dateStringP = document.createElement('p');
    dateStringP.innerHTML = dateString

    const weatherP = document.createElement('p');
    weatherP.innerHTML = weather

    const temperatureP = document.createElement('p');
    temperatureP.innerHTML = temperature + ' °C'

    card.appendChild(dateStringP);
    card.appendChild(weatherP);
    card.appendChild(temperatureP);

    return card;
}