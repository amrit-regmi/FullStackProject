import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CountryList from './Components/CountryList'
import Filter from './Components/Filter'
const App =()=>{
  
  const[searchText,setSearchText] = useState('')
  const[countries,setCountries]=useState([])
  
  const onChange =(event) =>{
    setSearchText(event.target.value)
  }

  const matchedCountres = countries.filter(country=> country.name.toLowerCase().includes(searchText.toLocaleLowerCase()))

  useEffect(()=>{
    axios.get("https://restcountries.eu/rest/v2/all").then(response=> setCountries(response.data))
  },[])

  const onClick = (country) =>{
    setSearchText(country.name)
  }
  
  return (
    
    <div>
      <Filter onChange={onChange} searchText={searchText} placeholder="Please Enter Country Name"></Filter>
      <CountryList 
        countries={matchedCountres} 
        onClick={onClick}
        searchText ={searchText}
        >
        </CountryList>
    </div>
  )

  }
export default App;
