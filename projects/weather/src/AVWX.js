import React, {useContext, useState} from "react"
import styled from "styled-components"
import {WeatherContext} from "./Context/WeatherContext"

const StyledMain = styled.div`
    display: flex;
    height: 75vh;
    position: relative;
    width: 100%;
    background-color: black;
`
const StyledForm = styled.form`
    position: relative;
    z-index:4;
`
const StyledBackground = styled.div`
    position: relative;
    background-image: url("https://images.unsplash.com/photo-1527354372664-ae0112ab2c41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
`
const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(10,10,10,0.5);
`

const StyledInput = styled.input`
    display: flex;
    height: 50px;
    width: 100px;
`
export default function AVWX(){
    const {getAVWX} = useContext(WeatherContext)

    const [icaoState, setIcaoState] = useState("")
    const handleChange = (e) => {
    const {value} = e.target
        setIcaoState(value)
    }
  
    const handleSubmit = (e) =>{
        e.preventDefault()
        getAVWX(icaoState)
    }
    return(
        <StyledMain>
            <StyledBackground>
                <Overlay />
            <StyledForm onSubmit={handleSubmit}>
                <StyledInput type="text" placeholder="Enter a ICAO" onChange={handleChange}></StyledInput>
                <button>Click</button>
            </StyledForm>
            </StyledBackground>
        </StyledMain>
    )
}