import React, {useContext, useState} from "react"
import styled from "styled-components"
import {WeatherContext} from "./Context/WeatherContext"


const StyledHome = styled.div`
    display: flex;
    height: 80vh;
    width: 100vw;
    background-color: rebeccapurple;
`

export default function Home(){
    const [addressState, setAddressState] = useState("")
    const handleChange = (e) => {
        const {value} = e.target
            setAddressState(value)
    }
    const {getLocation} = useContext(WeatherContext)
    const handleClick = (e) =>{
        e.preventDefault()
        getLocation(addressState)
    }
    
    return(
        <StyledHome>
            <input onChange={handleChange}></input>
            <button onClick={handleClick}>WTW?</button>
        </StyledHome>
    )
}