import React, {useEffect,useState } from 'react'
import weatherService from '../Services/WeatherService'
const WeatherInCapital = ({capital}) =>{
  const [weatherInfo,setWeatherInfo] = useState([])
    useEffect(()=> {weatherService(capital).then(response=> setWeatherInfo(response))},[capital])
    
    if(weatherInfo.length === 0){
      return null
    }

    return(
      <div>
        <h3>Weather in {capital} </h3>
        <p><strong>Temprature:</strong> {weatherInfo.temperature} &deg; C </p>
        <img src={weatherInfo.weather_icons[0]} alt ="weatherIcon"></img>
        <p><strong>Wind:</strong> {weatherInfo.wind_speed} mph, direction: {weatherInfo.wind_dir}  </p>

      </div>)
}

export default WeatherInCapital