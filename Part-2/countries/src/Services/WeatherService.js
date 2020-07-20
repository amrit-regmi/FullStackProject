import axios from 'axios'

const api_key = process.env.REACT_APP_API_KEY
const basUrl = "http://api.weatherstack.com/current"

const getWeatherData = capital => {
    return (
        axios.get(basUrl,{
          params:{
          access_key: api_key,
          query: capital
        }
      })
      .then(response=> response.data.current)
      )
}


export default getWeatherData

