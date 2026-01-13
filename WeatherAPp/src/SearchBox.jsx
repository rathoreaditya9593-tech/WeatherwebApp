import { useState } from 'react';
import './SearchB.css';

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "160b0732971b1ab9d7b4c4e7410b0bb6"; // your API key

    const handlesubmit = async (event) => {
        event.preventDefault();
        setError(false);
        try {
            const data = await Weatherupdate();
            updateInfo(data);
            setCity("");
        } catch (err) {
            setError(true);
        }
    };

    const Weatherupdate = async () => {
        const response = await fetch(
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );
        const JsonResponse = await response.json();
        if (Number(JsonResponse.cod) !== 200) throw new Error("Invalid City");

        return {
            city: JsonResponse.name,
            temp: JsonResponse.main.temp,
            tempMin: JsonResponse.main.temp_min,
            tempMax: JsonResponse.main.temp_max,
            humidity: JsonResponse.main.humidity,
            feelslike: JsonResponse.main.feels_like,
            weather: JsonResponse.weather[0].description,
        };
    };

    return (
        <div className="search-box">
            <form onSubmit={handlesubmit}>
                <input
                    type="text"
                    placeholder="Enter city..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                />
                <button type="submit">Search</button>
            </form>
            {error && <p className="error">Invalid city name. Try again!</p>}
        </div>
    );
}

