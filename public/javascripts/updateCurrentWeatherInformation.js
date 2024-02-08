import {getWeatherAndCityInformation} from "./getWeatherAndCityInformation.js";

/**
 * Gets weather information and displays it.
 */
export async function updateCurrentWeatherInformation() {
    const city = await fetchUserCity();
    const apiKey = '19df663de78873d8425b36b3fc7d25b6';

    const weatherAndCityInfo = await getWeatherAndCityInformation(apiKey, city);
    const weatherInfo = weatherAndCityInfo.weatherInfo;

    const temp = weatherInfo.main.temp;
    const weatherDescription = weatherInfo.weather[0].description;

    const temperatureDisplayElement = document.getElementById('temperature-info');
    temperatureDisplayElement.innerHTML = `Currently, ${city} has a temperature of ${temp} °C<br>Weather conditions: ${weatherDescription}`;

    let imagePath = '/images/weather-pictures/';

    // I match the pictures by icons - last character defines only the night/day version
    const iconForImageMatch = weatherInfo.weather[0].icon.slice(0,-1);

    switch(iconForImageMatch) {
        case '01': imagePath += 'clear-sky.jpg'; break;
        case '02': imagePath += 'few-clouds.jpg'; break;
        case '03': imagePath += 'scattered-clouds.jpg'; break;
        case '04': imagePath += 'broken-clouds.jpg'; break;
        case '09': imagePath += 'shower-rain.jpg'; break;
        case '10': imagePath += 'rain.jpg'; break;
        case '11': imagePath += 'thunderstorm.jpg'; break;
        case '13': imagePath += 'snow.jpg'; break;
        case '50': imagePath += 'mist.jpg'; break;
    }


    let imgElement = document.getElementById('weather-picture');
    if(imgElement === null) {
        imgElement = document.createElement('img');
        document.getElementById('weather-image-container').appendChild(imgElement);
    }
    imgElement.id = 'weather-picture';
    imgElement.setAttribute('src', imagePath);

}

/**
 * Fetches city of a user
 * @returns {Promise<string>}
 */
export async function fetchUserCity() {
    const username = window.localStorage.getItem('username');

    const response = await fetch(`/api/${username}/city`);
    return await response.text();
}