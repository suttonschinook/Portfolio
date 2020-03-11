import React, { useState, useContext, useEffect } from "react";
import { PortfolioContext } from "./context/PortfolioContext";
import { useTransition, animated } from "react-spring";
import styled from "styled-components";

const StyledHome = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
  padding-top: 96px;
  background-image: url("https://images.unsplash.com/flagged/photo-1565896209840-a18b89dd65d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9");
  background-repeat: no-repeat;
  background-size: 1920px 1080px;
  background-position: center top;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 400px) {
    background-size: 720px 540px;
    padding-top: 48px;
  }
`;
const Welcome = styled.p`
  text-align: center;
  font-family: "Raleway";
  font-size: 50px;
  font-weight: 700;
  color: slateblue;
  opacity: 0.9;
  @media (max-width: 400px) {
    font-size: 25px;
  }
`;

export default function Home() {
  const dateInfo = useContext(PortfolioContext);
  useEffect(() => {
    dateInfo.currentDate();
  }, []);
  const [show, set] = useState(true);
  const transition1 = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    config: { duration: 2000 }
  });
  const [show2, set2] = useState(true);
  const transition2 = useTransition(show2, null, {
    trail: 2000,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    config: { duration: 2000 }
  });
  let greeting;
  if (dateInfo.hour < 12) {
    greeting = "Good Morning";
  } else if (dateInfo.hour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return (
    <StyledHome>
      {transition1.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props}>
              <Welcome>{greeting}!</Welcome>
            </animated.div>
          )
      )}
      {transition2.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props}>
              <Welcome>
                I'm Evan, a Web Developer based in Salt Lake City
              </Welcome>
            </animated.div>
          )
      )}
    </StyledHome>
  );
}
