import React from 'react'

function WeatherDisplay({ data, unit } ) {
    // Vérifier si les données sont valides
    if (!data || data.cod === 400) {
        return <div>Erreur : Ville introuvable. Veuillez vérifier le nom de la ville saisi.</div>
    }

    const { name, weather, main, wind } = data
    let tempUnit;
    switch (unit) {
        case 'imperial':
            tempUnit = '°F';
            break;
        case 'metric':
            tempUnit = '°C';
            break;
        default:
            tempUnit = '';
    }

    console.log(unit);
    return (
        <div>
            <h2>{name}</h2>
            {weather.map((item) => (
                <div key={item.id}>
                    <p>{item.description}</p>
                    <img
                        src={`http://openweathermap.org/img/w/${item.icon}.png`}
                        alt={item.description}
                    />
                </div>
            ))}

            <div>
                <p>Température: {main.temp} { tempUnit } </p>
                <p>Ressenti: {main.feels_like} { tempUnit }</p>
                <p>Humidité: {main.humidity}%</p>
                <p>Vitesse du vent: {wind.speed} km/h</p>
            </div>
        </div>
    )
}

export default WeatherDisplay
