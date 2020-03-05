import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import WeatherContext from "./Context/WeatherContext"
import "./styles.css"

ReactDOM.render(
    <BrowserRouter>
        <WeatherContext>
            <App />
        </WeatherContext>
    </BrowserRouter>, 
    document.getElementById("root"))