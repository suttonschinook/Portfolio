import React, {useContext} from "react"
import styled from "styled-components"
import {WeatherContext} from "./Context/WeatherContext"

const StyledHome = styled.div`
    display: flex;
    height: 80vh;
    width: 100vw;
    background-color: rebeccapurple;
`

export default function Home(){
    const {getLocation} = useContext(WeatherContext)
    const handleClick = (e) =>{
        e.preventDefault()
        getLocation()
    }
    return(
        <StyledHome>
            <input></input>
            <button onClick={handleClick}>WTW?</button>
        </StyledHome>
    )
}