/**
 * Obtains information about the weather in specified city
 * @param {string} apiKey
 * @param {string} city
 * @returns {Promise<any>}
 */
export async function getWeatherAndCityInformation(apiKey, city) {
    const locationResponse = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
    )
    const cityInfo = await locationResponse.json();

    if(cityInfo.length === 0) {
        throw 'City not found';
    }

    const lon = cityInfo[0].lon;
    const lat = cityInfo[0].lat;

    const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${apiKey}`
    )

    return {cityInfo: cityInfo, weatherInfo: await weatherResponse.json()};
}