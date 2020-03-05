import React from "react"
import styled from "styled-components"

const StyledHome = styled.div`
    display: flex;
    height: 75vh;
    background-color: rebeccapurple;
`
export default function Home(){
    return(
        <StyledHome>
            <p>Stuff</p>
        </StyledHome>
    )
}