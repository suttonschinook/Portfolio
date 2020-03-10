import React, {useContext} from "react"
import {WeatherContext} from "./Context/WeatherContext"
import styled from "styled-components"
import Skycons from "react-skycons"

const StyledSkycon = styled.div`
    display: grid;
    width: 100px;
    height: 200px;
    grid-column: 1 / 2;
    grid-row: 1/2;
`

export default function Skycon(){
    const {currently} = useContext(WeatherContext).data
    return(
        <StyledSkycon>
            <Skycons color='black' 
                icon={currently.icon.toUpperCase().split("-").join("_")} 
                autoplay={true} width= '50px' />
        </StyledSkycon>
    )
}
