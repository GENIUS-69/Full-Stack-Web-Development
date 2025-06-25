document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('city-input');
    const getWeatherBtn = document.getElementById('get-weather-btn');
    const weatherInfo = document.getElementById('weather-info');
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const errorMessage = document.getElementById('error-message');

    const API_KEY = '65ec0ed766ecda4b9df409dfa6d56121'

    getWeatherBtn.addEventListener('click', async () => {
        const city = cityInput.value.trim()
        if (!city) return;

        // it may throw an error
        try {
            const weatherData = await fetchWeatherData(city);
            displayWeatherData(weatherData);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            showError();
            return;
            
        }

    })

    async function fetchWeatherData(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

        const response = await fetch(url)

        if (!response.ok) {
            throw new Error('City not Found');   
        }

        const data = await response.json()
        return data;
        
    }

    function displayWeatherData(Data) {
        const {name,main,weather}= Data;
        cityName.textContent = name;

        temperature.textContent = `Temperature: ${Math.round(main.temp)}°C`;
        description.textContent = `Weather: ${weather[0].description}`;

        //unlock display
        weatherInfo.classList.remove('hidden');
        errorMessage.classList.add('hidden');
    }

    function showError() {
        weatherInfo.classList.remove('hidden');
        errorMessage.classList.add('hidden');
    }
})