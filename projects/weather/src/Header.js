import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
    display: flex;
    height: 15vh;
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
    justify-content: space-between;
    
`
export default function Header(){
    return(
        <StyledHeader>
            <p>What's the Weather? (WTW?)</p>
            <StyledNavbar>
                <span>home</span>
                <span>about</span>
            </StyledNavbar>
        </StyledHeader>
    )
}