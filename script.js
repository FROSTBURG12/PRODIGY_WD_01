const apiKey = '99a998d01e32d9c02aafc77d7af05fe6'; // Replace with your OpenWeatherMap API key

function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weatherDisplay').innerHTML = "Error fetching data.";
        });
}

function displayWeather(data) {
    const weatherDisplay = document.getElementById('weatherDisplay');
    if (data.cod === 200) {
        const weatherInfo = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
        weatherDisplay.innerHTML = weatherInfo;
    } else {
        weatherDisplay.innerHTML = `<p>${data.message}</p>`;
    }
}
