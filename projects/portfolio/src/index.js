import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "react-router-dom"
import App from "./App"
import PortfolioContext from "./context/PortfolioContext"
import "./styles.css"

ReactDOM.render(
    <Router>
    <PortfolioContext>
        <App />
    </PortfolioContext>
    </Router>,
    document.getElementById("root"))