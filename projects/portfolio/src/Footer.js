import React, {useContext} from "react"
import {PortfolioContext} from "./context/PortfolioContext"
import styled from "styled-components"


const StyledFooter = styled.div`
    display: grid;
    height: 10vh;
    background-color: black;
    color: whitesmoke;
`
const StyledDate = styled.p`
    display: flex;
    margin: auto 5px 5px auto;
    font-size: 10px;
`

export default function Footer(){

    const dateInfo = useContext(PortfolioContext)
    console.log(dateInfo)
    return(
        <StyledFooter className="footer">
            <StyledDate>{dateInfo.date}</StyledDate>
        </StyledFooter>
    )
    
}