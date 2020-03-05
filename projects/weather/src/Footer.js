import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
    display: flex;
    height: 10vh;
`
export default function Footer(){
    return(
        <StyledFooter>
            <p>Shit and stuff</p>
        </StyledFooter>
    )
}