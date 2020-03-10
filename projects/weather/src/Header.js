import React from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"

const StyledHeader = styled.header`
    display: flex;
    height: 15vh;
    justify-content: space-between;
    align-items: center;
    font-family: Lato;
    font-weight: 400;
    font-size: 40px;
    color: black;
    background-image: linear-gradient(to left , skyblue, grey);
    `
    const StyledNavbar = styled.div`
    display: flex;
    height: 5vh;
    justify-content: space-between;
    
`
export default function Header(){
    return(
        <StyledHeader>
            <p>What's the Weather? (WTW?)</p>
            <StyledNavbar>
                <Link to="/">home</Link>
                <Link to="/about">about</Link>
                <Link to="/AVWX">AVWX</Link>
            </StyledNavbar>
        </StyledHeader>
    )
}