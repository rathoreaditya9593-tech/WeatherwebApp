import { useState } from 'react';
import SearchBox from './SearchBox';
import Info from './Info';
import './App.css';

function App() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Wonderland",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    const updateInfo = (newInfo) => setWeatherInfo(newInfo);

    // Dynamic page background based on weather
    const getBackground = () => {
        const temp = weatherInfo.temp;
        const humidity = weatherInfo.humidity;
        const weather = weatherInfo.weather.toLowerCase();

        if (humidity > 80) return 'linear-gradient(to right, #373b44, #4286f4)'; // Rainy
        if (temp >= 30) return 'linear-gradient(to right, #f7971e, #ffd200)';   // Hot
        if (temp < 15) return 'linear-gradient(to right, #83a4d4, #b6fbff)';   // Cold
        if (weather.includes("haze") || weather.includes("mist"))
            return 'linear-gradient(to right, #e0c3fc, #8ec5fc)';                 // Hazy / Mist
        return 'linear-gradient(to right, #ff9a9e, #fad0c4)';                   // Default Pinkish
    };

    return (
        <div className="app" style={{ background: getBackground() }}>
            <h1>🌤 Weather App</h1>
            <SearchBox updateInfo={updateInfo} />
            <Info weatherInfo={weatherInfo} />
        </div>
    );
}

export default App;
