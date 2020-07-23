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
    const wrapper = document.createElement('div');
    const min = document.createElement('span');
    const max = document.createElement('span');
    const day = document.createElement('span');
    const daysOfWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday', 'Sunday'];
    const wstate = document.createElement('span');
    // Create fancy day.
    let today = new Date(weather.applicable_date);

    min.innerText = parseFloat(weather.min_temp).toFixed(2);
    max.innerText = parseFloat(weather.max_temp).toFixed(2);
    day.innerText = daysOfWeek[today.getDay()];
    wstate.innerText = weather.weather_state_name;
    const icons ={
        hc: 'fa-cloud',
        lr: 'fa-rain',
        s: 'fa-cloud-rain',
        hr:'fa-cloud-showers-heavy',
    }

    //loop
    wstate.classList.add('fas')
    wstate.classList.add(icons[weather_state_abbr])
console.log(wstate);
    // Styles.
    wrapper.classList.add('day-wrapper');

    // Form DOM.
    wrapper.appendChild(min);
    wrapper.appendChild(max);
    wrapper.appendChild(day);
    wrapper.appendChild(wstate);

    return wrapper;
}