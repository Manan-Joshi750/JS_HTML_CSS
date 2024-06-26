document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    const container = document.querySelector('.container');
    const weatherContainer = document.querySelector('.weather-container');
    const cityName = document.querySelector('.city-name');
    const temperature = document.querySelector('.temperature');
    const description = document.querySelector('.description');
    const humidity = document.querySelector('.humidity');
    const wind = document.querySelector('.wind');
    const pressure = document.querySelector('.pressure');
    const precipitation = document.querySelector('.precipitation');
    const errorMessage = document.querySelector('.error-message');

    const apiKey = 'YOUR_API_KEY'; // Replace with your API key from OpenWeatherMap

    searchBtn.addEventListener('click', function() {
        const city = searchInput.value.trim();
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('City not found');
                }
                return response.json();
            })
            .then(data => {
                displayWeather(data);
                errorMessage.textContent = '';
                container.classList.add('search-active');
                weatherContainer.classList.remove('hidden');
                weatherContainer.classList.add('visible');
                adjustBackground(data.main.temp);
            })
            .catch(error => {
                console.error(error);
                errorMessage.textContent = 'City not found. Please enter a valid city name.';
                cityName.textContent = '';
                temperature.textContent = '';
                description.textContent = '';
                humidity.textContent = '';
                wind.textContent = '';
                pressure.textContent = '';
                precipitation.textContent = '';
            });
    });

    function displayWeather(data) {
        cityName.textContent = `${data.name}, ${data.sys.country}`;
        temperature.textContent = `Temperature: ${Math.round(data.main.temp)}°C`;
        description.textContent = `Description: ${data.weather[0].description}`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        wind.textContent = `Wind: ${data.wind.speed} m/s`;
        pressure.textContent = `Pressure: ${data.main.pressure} hPa`;
        precipitation.textContent = `Precipitation: ${data.rain ? data.rain['1h'] : '0'} mm`;
    }

    function adjustBackground(temp) {
        if (temp > 30) {
            document.body.style.backgroundColor = '#ff7f50'; // Coral
        } else if (temp >= 20 && temp <= 30) {
            document.body.style.backgroundColor = '#87cefa'; // Light Sky Blue
        } else {
            document.body.style.backgroundColor = '#4682b4'; // Steel Blue
        }
    }
});