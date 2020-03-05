import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
    display: flex;
    height: 10vh;
    justify-content: space-between;
    align-items: center;
    font-family: Misfits;
    font-size: 50px;
    color: whitesmoke;
    background-image: linear-gradient(to left , skyblue, grey);
    `
    const StyledNavbar = styled.div`
    display: flex;
    height: 5vh;
    justify-content: space-evenly;
    
`
export default function Header(){
    return(
        <StyledHeader>
            <p>What's the Weather?</p>
            <StyledNavbar>
                <p>home</p>
                <p>about</p>
            </StyledNavbar>
        </StyledHeader>
    )
}