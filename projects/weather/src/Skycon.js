import React, {useContext} from "react"
import {WeatherContext} from "./Context/WeatherContext"
import styled from "styled-components"
import Skycons from "react-skycons"
import { unstable_renderSubtreeIntoContainer } from "react-dom"

const StyledSkycon = styled.div`
    display: grid;
    width: 100px;
    height: 200px;
    grid-column: 1 / 2;
    grid-row: 1/2;
`

export default function Skycon(){
    const {iconUpdate} = useContext(WeatherContext)
    return(
        <StyledSkycon>
            <Skycons color='black' 
                icon={iconUpdate} 
                autoplay={true} width= '50px' />
        </StyledSkycon>
    )
}
