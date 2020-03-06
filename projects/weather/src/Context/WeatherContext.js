import React, {useState, useEffect} from "react"
export const WeatherContext = React.createContext()
const axios = require('axios')
export default function WeatherProivider(props){
    const [weatherState, setWeatherState] = useState({
        results: {},
        location:{}
    })
    

function getLocation(){
    axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key='+process.env.REACT_APP_GEOCODING_APIKEY)
    .then(response => {
        console.log(response)
        const {location} = response.data.results[0].geometry
        setWeatherState(prev => ({...prev, location}))
        const {lat, lng} = weatherState.location
        getWX(lat, lng)
    })
}
function getWX(lat, lng){   
    axios.get('https://vschool-cors.herokuapp.com?url=https://api.darksky.net/forecast/'+ process.env.REACT_APP_WEATHER_APIKEY + `/${lat},${lng}`)
        .then(response => {
            console.log(response)
            setWeatherState(prev => ({...prev, results: response}))
        }).catch (err =>  console.log(err))}
    return(
        <WeatherContext.Provider
            value={{...weatherState, getLocation
        }}>
            {props.children}
        </WeatherContext.Provider>
    )
}
