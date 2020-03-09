import React, {useContext, useState} from "react"
import styled from "styled-components"
import {WeatherContext} from "./Context/WeatherContext"
import Current from "./Current"


const StyledHome = styled.div`
    height: 80vh;
    width: 100vw;
    background-color: rebeccapurple;
`
const StyledCurrent = styled.div`
    display: grid;
    height: 60vh;
    width: 70vw;
    border-radius: 5%;
    background-color: whitesmoke;
    margin-left: 25%;
    margin-top: 5%;
`

export default function Home(){
    const [addressState, setAddressState] = useState("")
    const handleChange = (e) => {
        const {value} = e.target
            setAddressState(value)
    }
    const {getLocation, data} = useContext(WeatherContext)
    console.log(useContext(WeatherContext))
    const handleClick = (e) =>{
        e.preventDefault()
        getLocation(addressState)
    }
    
    return(
        <StyledHome>
            <input onChange={handleChange}></input>
            <button onClick={handleClick}>WTW?</button>
            <StyledCurrent>
                {data && <Current />}
            </StyledCurrent>
        </StyledHome>
    )
}