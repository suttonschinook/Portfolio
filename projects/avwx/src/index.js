import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import AVWXContext from "./context/AVWXContext"
import "./styles.css"


ReactDOM.render(
    <AVWXContext>
        <App />
    </AVWXContext>,
    document.getElementById("root")
)