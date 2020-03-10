import React, {useState, useEffect} from "react"
export const WeatherContext = React.createContext()
const axios = require('axios')
export default function WeatherProivider(props){
    const [weatherState, setWeatherState] = useState({
        avwx:{},
        results: {
            }
    })

useEffect(() => {
    getLocation("Salt Lake City")
},  [])

function getAVWX(airport){
    axios.get('https://api.checkwx.com/metar/'+airport+'/decoded?pretty=1',{
        headers:{
            "x-api-key": process.env.REACT_APP_AVWX_APIKEY
        }
    })
    .then(response => {
        console.log(response)
        setWeatherState(prev =>({...prev, avwx: response}))
    })
}

function getLocation(address){
    axios.get('https://maps.googleapis.com/maps/api/geocode/json?address='+ address+'&key='+process.env.REACT_APP_GEOCODING_APIKEY)
    .then(response => {
        const {location} = response.data.results[0].geometry
        getWX(location.lat, location.lng)
    })
}
function getWX(lat, lng){   
    axios.get('https://vschool-cors.herokuapp.com?url=https://api.darksky.net/forecast/'+ process.env.REACT_APP_WEATHER_APIKEY + `/${lat},${lng}`)
        .then(response => {
            setWeatherState(prev => ({...prev, results: response}))
        }).catch (err =>  console.log(err))}
    return(
        <WeatherContext.Provider
            value={{...weatherState.results, getLocation, getAVWX
        }}>
            {props.children}
        </WeatherContext.Provider>
    )
}
