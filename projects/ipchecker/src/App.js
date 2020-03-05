import React from "react"
import Header from "./Header"
import IPChecker from "./IPChecker"
import Map from "./Map"
import Results from "./Results"
import Footer from "./Footer"

export default function App(){
    return(
        <div>
            <Header />
            <IPChecker />
            <div className = "combo">
                <Map />
                <Results />
            </div>
            <Footer />
        </div>
    )
}
