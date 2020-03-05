import React, {useContext, useEffect} from "react"
import {PortfolioContext} from "./context/PortfolioContext"
import styled from "styled-components"

const Home = styled.main`
    display: grid;
    grid-template-columns: 7, 1fr;
    grid-template-rows: 7, 1fr;
    height: 70vh;
    background-image: url('https://images.unsplash.com/flagged/photo-1565896209840-a18b89dd65d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9');
    background-repeat: no-repeat;
    background-size: 1920px 1080px;
    background-position: center top ;
    margin-left:auto;
    margin-right:auto;
`
const Welcome = styled.p`
    display: grid;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    font-family: "Raleway";
    font-size: 50px;
    font-weight: 700;
    color: lightgray;
    opacity: 0.9;
`
export default function Main(){
    const dateInfo = useContext(PortfolioContext)
    useEffect(() => {
        dateInfo.currentDate()

    },[])

    let greeting
        if(dateInfo.hour < 12){
            greeting = "Good Morning"
        }else if(dateInfo.hour < 18){
            greeting = "Good Afternoon"
        }else{
            greeting = "Good Evening"
        }
    return(
        <Home>
            <Welcome>{greeting},</Welcome>
        </Home>
    )
}