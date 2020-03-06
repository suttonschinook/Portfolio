import React, {useState, useEffect} from "react"
export const WeatherContext = React.createContext()
const axios = require('axios')


export default function WeatherProivider(props){
    const [weatherState, setWeatherState] = useState({
        results: {},
        location:{}
    })
    const {lat, lng} = weatherState.location

function getWX(location){
    axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key='+process.env.REACT_APP_GEOCODING_APIKEY)
    .then(response => response.json())
    .then(response => {
        const {location} = response.results[0].geometry
        setWeatherState(prev => ({...prev, location}))
        return
    })
}
    useEffect(() => {  
       if(lat){axios.get('https://vschool-cors.herokuapp.com?url=https://api.darksky.net/forecast/'+ process.env.REACT_APP_WEATHER_APIKEY + `/${weatherState.location.lat}/${weatherState.location.lng}`)
    .then(response => response.json())
    .then(response => {
        console.log(response)
        setWeatherState({results: response.data})
    }).catch (err =>  console.log(err))}
    }, [lat, lng] )
    return(
        <WeatherContext.Provider
            value={{...weatherState, getWX
        }}>
            {props.children}
        </WeatherContext.Provider>
    )
}
