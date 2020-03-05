import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
    display: flex;
    height: 10vh;
    background-color: green;

`

export default function Footer(){
    return(
        <StyledFooter>
            <p>This is the StyledFooter</p>
        </StyledFooter>
    )
}