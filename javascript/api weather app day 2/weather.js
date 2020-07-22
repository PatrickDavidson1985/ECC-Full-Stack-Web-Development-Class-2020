/**
 * 1. Fetch meta weather data that you want to use.
 * 2. Parse the fetched data
 * 3. Manipulate/mold the data so that it is useable to you
 * 4. Get that data to the ui/front-end
 */

const baseURL = 'https://www.metaweather.com/api/location';

async function getWOEID() {
    let woeid;

    await fetch(baseURL + '/search/?query=london')
    .then(response => response.json())
    .then(function(locationData) {
        woeid = locationData[0]['woeid']
    })
    .catch(err => console.error(err))

    return woeid;
}

async function getWeatherData() {
    const locationID = await getWOEID();
    let weatherData;

    await fetch(baseURL + '/' + locationID)
    .then(response => response.json())
    .then(data => {
        weatherData = data;
    })
    .catch(err => console.error(err));

    return weatherData;
}

async function renderWeatherData() {
    const weather = await getWeatherData();
    const forecast = weather['consolidated_weather'];
    console.log(forecast)

    forecast.forEach(element => {
        const wDay = createWeatherDay(element);
        document.querySelector('#app').appendChild(wDay);
    });
}

renderWeatherData();

const createWeatherDay = function(weather) {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    const span = document.createElement('span');

    ul.innerHTML = weather.min_temp
    li.innerHTML = weather.max_temp
    span.innerHTML = weather.weather_state_name
    append (li, span);
    append (ul, li);
    
}

function append(parent, element)  {
    return parent.appendChild.element;
}
