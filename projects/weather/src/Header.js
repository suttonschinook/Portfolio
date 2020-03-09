import React from "react"
import styled from "styled-components"

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
                <p>home</p>
                <p>about</p>
            </StyledNavbar>
        </StyledHeader>
    )
}