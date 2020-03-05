import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
    display: flex;
    height: 10vh;
    justify-content: center;
    align-items: center;
`
export default function Header(){
    return(
        <StyledHeader>Weather</StyledHeader>
    )
}