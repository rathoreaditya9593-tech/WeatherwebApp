import './Info.css';

export default function Info({ weatherInfo }) {
    const { temp, humidity, weather, city, feelslike, tempMin, tempMax } = weatherInfo;

    let image =
        "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200";
    let icon = "⛅";

    if (humidity > 80) {
        image =
            "https://images.unsplash.com/photo-1433863448220-78aaa064ff47?w=1200";
        icon = "🌧️";
    } else if (temp >= 30) {
        image =
            "https://media.istockphoto.com/id/157313406/photo/libya.webp";
        icon = "🔥";
    } else if (temp < 15) {
        image =
            "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=1200";
        icon = "❄️";
    }

    return (
        <div
            className="weather-card full"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="overlay"></div>

            <div className="content">
                <h2 className="city">{city}</h2>
                <div className="icon">{icon}</div>
                <div className="temp">{Math.round(temp)}°C</div>
                <p className="desc">{weather}</p>
                <div className="details">
                    <span>💧 {humidity}%</span>
                    <span>🌡 Feels {Math.round(feelslike)}°C</span>
                </div>
                <div className="minmax">
                    <span>⬇ {Math.round(tempMin)}°</span>
                    <span>⬆ {Math.round(tempMax)}°</span>
                </div>
            </div>
        </div>
    );
}
