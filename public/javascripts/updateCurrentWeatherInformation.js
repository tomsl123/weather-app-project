/**
 * Gets weather information and displays it.
 */
async function updateCurrentWeatherInformation() {
    const city = 'Berlin';
    const apiKey = '19df663de78873d8425b36b3fc7d25b6';

    const locationResponse = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
    )
    const cityInfo = await locationResponse.json();
    const lon = cityInfo[0].lon;
    const lat = cityInfo[0].lat;

    const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${apiKey}`
    )
    const weatherInfo = await weatherResponse.json();
    const temp = weatherInfo.main.temp;

    const temperatureDisplayElement = document.getElementById('temperatureInfo');
    temperatureDisplayElement.innerHTML = `Currently, ${city} has a temperature of ${temp} °C`;
}