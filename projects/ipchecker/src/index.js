import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import IPInfoProvider from "./context/IPInfoProvider"

ReactDOM.render(
    <IPInfoProvider>
        <App />
    </IPInfoProvider>,
     document.getElementById("root"))