import React, { useContext } from "react";
import { PortfolioContext } from "./context/PortfolioContext";
import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  height: 10vh;
  background-color: black;
  color: whitesmoke;
  @media (max-width: 400px) {
    height: 5vh;
  }
`;
const StyledDate = styled.p`
  display: flex;
  margin: auto 5px 5px auto;
  font-size: 10px;
  @media (max-width: 400px) {
    margin: auto;
  }
`;

export default function Footer() {
  const dateInfo = useContext(PortfolioContext);
  console.log(dateInfo);
  return (
    <StyledFooter className="footer">
      <StyledDate>{dateInfo.date}</StyledDate>
    </StyledFooter>
  );
}
