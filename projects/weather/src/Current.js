import React, {useContext} from "react"
import {WeatherContext} from "./Context/WeatherContext"
import styled from "styled-components"
import Skycon from "./Skycon"


const StyledCurrent = styled.div`
    font-family: Lato;
    display: grid;
    grid-template-columns: 6;
`
const StyledConditions = styled.h1`
    display: grid;
    font-family: Lato;
    grid-column: 3 / 7;
    grid-row: 1 /1 ;
    width: 100px;
`
const StyledSummary = styled.h1`
    font-family: Lato;
    font-size: 25px;
    display: grid;
    grid-column: 5 / 7;
`

export default function Current(){
    console.log(useContext(WeatherContext).data)
    const {currently} = useContext(WeatherContext).data
    return(
        <StyledCurrent>
            <Skycon />
            <StyledConditions>Currently it is {currently.summary}</StyledConditions>
            <StyledSummary>Current Temp:{currently.temperature}</StyledSummary>
            <StyledSummary>Feels like: {currently.apparentTemperature}</StyledSummary>
            <StyledSummary>Dew Point: {currently.dewPoint}</StyledSummary>
            <StyledSummary>Wind: {currently.windSpeed} Gusting to {currently.windGust}</StyledSummary>
            <StyledSummary>Wind from {currently.windBearing} degrees</StyledSummary>
            <StyledSummary>Visibility: {currently.visibility} miles</StyledSummary>
        </StyledCurrent>
    )
}

// time: 1583774029,
// summary: "Mostly Cloudy",
// icon: "partly-cloudy-day",
// nearestStormDistance: 6,
// nearestStormBearing: 345,
// precipIntensity: 0,
// precipProbability: 0,
// temperature: 54.03,
// apparentTemperature: 54.03,
// dewPoint: 30.19,
// humidity: 0.4,
// pressure: 1018.4,
// windSpeed: 7.84,
// windGust: 11.36,
// windBearing: 207,
// cloudCover: 0.84,
// uvIndex: 2,
// visibility: 10,
// ozone: 376.3,