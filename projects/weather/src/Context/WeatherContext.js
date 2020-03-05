import React, {useState} from "react"
export const WeatherContext = React.createContext()

export default function WeatherProivider(props){
    const [weatherState, setWeatherState] = useState({
        results: {}
    })

    // function getWX(){
        
    // }

    return(
        <WeatherContext.Provider
            value={{...weatherState
        }}>
            {props.children}
        </WeatherContext.Provider>
    )
}
