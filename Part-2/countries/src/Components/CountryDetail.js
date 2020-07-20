import React from 'react'
import WeatherInCapital from './WeatherInCapital'
const CountryDetail = ({country})=>{
  return(
    <div>
      <h2>{country.name}</h2>
      <p>Capital: {country.capital}
      <br></br>
      Population: {country.population}
      </p>

      <h3>Languages</h3>
      <ul>
        {country.languages.map(language=><li key={language.name}>{language.name}</li>)}
        
      </ul>
      <img src={country.flag} alt="Flag" width="150" height="150"/>
      <WeatherInCapital capital={country.capital}></WeatherInCapital>
      <div>

      </div>

    </div> )

}
export default CountryDetail