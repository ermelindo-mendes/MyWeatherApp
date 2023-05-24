import React, { useState } from 'react'
import SearchForm from '../components/SearchForm'
import WeatherDisplay from '../components/WeatherDisplay'

function Main() {
    const [weatherData, setWeatherData] = useState(null)

    const handleWeatherData = (data) => {
        setWeatherData(data)
    }

    return (
        <div>
            <h1>Application météo</h1>
            <SearchForm onWeatherData={handleWeatherData} />
            {weatherData && <WeatherDisplay data={weatherData} />}
        </div>
    )
}

export default Main
