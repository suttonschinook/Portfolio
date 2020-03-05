import React from "react"
import styled from "styled-components"

const StyledNavbar = styled.nav`
    display: flex;
    height: 5vh;
    justify-content: space-evenly;
    align-items: center;
    font-family: Oswald;
    background-color: grey;
`
export default function Navbar(){
    return(
        <StyledNavbar>
            <a href="/">Home</a>
            <a href="">Airport Diagrams</a>
        </StyledNavbar>
    )
}