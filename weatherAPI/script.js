const apiKey = 'c3c738a4cc024add09e2b53a15b0f773'; 

async function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const weatherInfo = document.getElementById('weatherInfo');

    if (cityInput.value.trim() === '') {
        alert('Por favor, ingrese el nombre de la ciudad.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const cityName = data.name;

            weatherInfo.innerHTML = `<p>Clima en ${cityName}: ${temperature}°C, ${description}</p>`;
            weatherInfo.style.display = 'block';
        } else {
            weatherInfo.innerHTML = `<p>Error al obtener el clima: ${data.message}</p>`;
            weatherInfo.style.display = 'block';
        }
    } catch (error) {
        console.error('Error al obtener datos:', error);
        weatherInfo.style.display = 'block';
    }
}
