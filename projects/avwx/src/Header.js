import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
    display: flex;
    height: 10vh;
    justify-content: center;
    align-items: center;
    font-family: Lobster;
    font-size: 75px;
    color: whitesmoke;
    background-color: black;
    background-image: linear-gradient(to bottom , skyblue, grey)
`

export default function Header(){   
    return(
        <StyledHeader>
            <p>Aviation Weather Finder</p>
        </StyledHeader>
    )
}