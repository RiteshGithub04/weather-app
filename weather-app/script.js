function getWeather() {
    const city = document.getElementById("city").value;

    if(city === "") {
        alert("Please enter a city name");
        return;
    }

    const weatherResult = document.getElementById("weather-result");

    weatherResult.innerHTML = `
        <p>Weather in <strong>${city}</strong></p>
        <p>Temperature: 26°C</p>
        <p>Condition: Sunny ☀️</p>
    `;
}
