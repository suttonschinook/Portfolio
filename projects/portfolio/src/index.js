import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import PortfolioContext from "./context/PortfolioContext";
import "./styles.css";

ReactDOM.render(
  <BrowserRouter>
    <PortfolioContext>
      <App />
    </PortfolioContext>
  </BrowserRouter>,
  document.getElementById("root")
);
