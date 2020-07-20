import React from 'react'
import CountryDetail from './CountryDetail'

const CountryList = ({countries,onClick,searchText})=>{
    if (searchText ===""){
        return null
    }
    if(countries.length > 10){
      return (<div> Too many matches,specify another filter</div>)
    }
  
    if (countries.length ===1){
  
      return (
      <CountryDetail 
        country={countries[0]}
      ></CountryDetail>)
    }
  
    return(
      <div>
      {countries.map(country=><div key={country.numericCode}>{country.name} <button onClick = {()=>onClick(country)} >Show </button></div> )}
      </div> )
  
  }

  export default CountryList