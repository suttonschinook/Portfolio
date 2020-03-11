import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.div`
  display: flex;
  height: 5vh;
  background-color: whitesmoke;
  justify-content: space-evenly;
  align-items: center;
`;
const StyledAnchor = styled.a`
  font-family: Oswald;
  opacity: 0.8;
  text-decoration: none;
  @media (max-width: 400px) {
  }
`;
const StyledLink = styled(Link)`
  font-family: Oswald;
  opacity: 0.8;
  text-decoration: none;
`;
export default function Navbar() {
  return (
    <NavBar>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/About">About</StyledLink>
      <StyledLink to="/Portfolio">Portfolio</StyledLink>
      <StyledAnchor
        href="https://github.com/suttonschinook"
        target="_blank"
        rel="noopener noreferrer"
        alt=""
      >
        <img
          src="http://pngimg.com/uploads/github/github_PNG83.png"
          height="30px"
          alt=""
        />
      </StyledAnchor>
      <StyledAnchor
        href="https://www.linkedin.com/in/evan-c-sutton/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="http://pngimg.com/uploads/linkedIn/linkedIn_PNG39.png"
          height="30px"
          alt=""
        />
      </StyledAnchor>
      <StyledAnchor>Resume</StyledAnchor>
      <StyledLink to="/Contact">Contact</StyledLink>
    </NavBar>
  );
}
