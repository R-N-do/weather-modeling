async function getWeather() {
    const apiKey = 'YOUR_API_KEY'; // ここにあなたのAPIキーを入力
    const city = document.getElementById('cityInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ja`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            throw new Error(data.message);
        }

        displayWeather(data);
    } catch (error) {
        document.getElementById('weatherResult').innerText = 'エラーが発生しました: ' + error.message;
    }
}

function displayWeather(data) {
    const weather = `
        <h2>${data.name}の天気</h2>
        <p>気温: ${data.main.temp}°C</p>
        <p>天気: ${data.weather[0].description}</p>
        <p>風速: ${data.wind.speed} m/s</p>
    `;
    document.getElementById('weatherResult').innerHTML = weather;
}
