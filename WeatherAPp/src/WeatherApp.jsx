import SearchBox from './SearchBox.jsx'
import Info from './Info.jsx'
import { useState } from 'react'

export default function Weather() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Wonderland",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    const updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div>
            <h1>Weather App</h1>
            <h4>Search for Weather</h4>

            <SearchBox updateInfo={updateInfo} />
            <Info weatherInfo={weatherInfo} />
        </div>
    );
}
