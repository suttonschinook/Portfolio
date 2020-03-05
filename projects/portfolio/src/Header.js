import React from "react"
import styled from "styled-components"

const HeaderStyled = styled.header`
    display: flex;
    background-color: black;
    height: 15vh;
    align-items: center;
    justify-content: center;
    color: whitesmoke;
`
const ParagraphStyled = styled.p`
    font-family: Raleway;
    font-size: 50px;
`

export default function Header(){
    return(
        <HeaderStyled>
            <ParagraphStyled>EVAN SUTTON</ParagraphStyled>
        </HeaderStyled>
    )
}