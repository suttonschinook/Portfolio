import React, {useState, useEffect} from "react"
export const WeatherContext = React.createContext()
const axios = require('axios')
export default function WeatherProivider(props){
    const [weatherState, setWeatherState] = useState({
        results: {
            data: {
                currently:{
                    time: 1583774029,
                    summary: "Mostly Cloudy",
                    icon: "partly_cloudy_day",
                    nearestStormDistance: 6,
                    nearestStormBearing: 345,
                    precipIntensity: 0,
                    precipProbability: 0,
                    temperature: 54.03,
                    apparentTemperature: 54.03,
                    dewPoint: 30.19,
                    humidity: 0.4,
                    pressure: 1018.4,
                    windSpeed: 7.84,
                    windGust: 11.36,
                    windBearing: 207,
                    cloudCover: 0.84,
                    uvIndex: 2,
                    visibility: 10,
                    ozone: 376.3,
                }
            }
        },
    })

useEffect(() => {
    getLocation("Salt Lake City")
},  [])

const icon = weatherState.results.data.currently

useEffect(() =>{
    updateIcon()
    setWeatherState(prev => ({...prev, iconUpdate}))
}, [icon])

let iconUpdate =""

function updateIcon(){
    iconUpdate = weatherState.results.data.currently.icon.toUpperCase().split("-").join("_")
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
            value={{...weatherState.results, getLocation
        }}>
            {props.children}
        </WeatherContext.Provider>
    )
}
