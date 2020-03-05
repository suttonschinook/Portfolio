import React from "react"
import styled from "styled-components"

const StyledNavbar = styled.div`
    display: flex;
    height: 5vh;
`
export default function Navbar(){
    return(
        <StyledNavbar>
            <a>Home</a>
        </StyledNavbar>
    )
}