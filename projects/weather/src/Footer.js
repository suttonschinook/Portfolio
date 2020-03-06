import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
    display: flex;
    height: 5vh;
    text-decoration: none;
`
export default function Footer(){
    return(
        <StyledFooter>
            <a href="https://darksky.net/dev" target="_blank">Powered by Dark Sky</a>
        </StyledFooter>
    )
}