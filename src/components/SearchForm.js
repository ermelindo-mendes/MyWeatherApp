import React, { useState, useEffect } from 'react'
import axios from 'axios'
import WeatherDisplay from './WeatherDisplay'

const apiKey = 'cf795b6b610b4b97f756c0337306ff6b'
function SearchForm() {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');
    const [unit, setUnit] = useState('metric'); // Par défaut, utilisez Celsius (unité métrique)
  
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&&lang=fr&appid=${apiKey}&units=${unit}`
        );
        setWeatherData(response.data);
        setError('');
      } catch (error) {
        console.error(error);
        setError('Ville introuvable. Veuillez vérifier le nom de la ville saisi.');
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      fetchData();
    };
  
    const handleUnitChange = (e) => {
      setUnit(e.target.value);
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Entrez le nom d'une ville"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">Rechercher</button>
          {error && <div>{error}</div>}
        </form>
        <select value={unit} onChange={handleUnitChange}>
          <option value="metric">Celsius</option>
          <option value="imperial">Fahrenheit</option>
        </select>
        {weatherData && <WeatherDisplay data={weatherData} unit={ unit } />}
      </div>
    );
  }
  

export default SearchForm;
// function SearchForm() {
    
//     const [city, setCity] = useState('')
//     const [weatherData, setWeatherData] = useState(null)
//     const [error, setError] = useState('')
//     const [msg, setMsg] = useState('')

//     if (city === '' ) {
//         setMsg("Veuillez entrer le nom d'une ville.")
//     }

//         useEffect(() => {
//             fetchData()
//         }, [])

    
//     const fetchData = async () => {
//         try {
//             const response = await axios.get(
//                 `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
//             )
//             setWeatherData(response.data)
//             setError('Ville introuvable. Veuillez vérifier le nom de la ville saisi.')
//         } catch (error) {
//             console.error(error)
//             setError('Ville introuvable. Veuillez vérifier le nom de la ville saisi.')
//         }
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         fetchData()
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type='text'
//                     placeholder="Entrez le nom d'une ville"
//                     value={city}
//                     onChange={(e) => setCity(e.target.value)}
//                 />
//                 <button type='submit'>Rechercher</button>
//                  {error && <div>{error}</div>}
//             </form>
//             {city && weatherData && <WeatherDisplay data={weatherData} />}
//         </div>
//     )
// }

// export default SearchForm
