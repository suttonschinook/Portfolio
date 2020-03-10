import React from "react"
import {Route, Switch} from "react-router-dom"
import Header from "./Header"
import Home from "./Home"
import About from "./About"
import AVWX from "./AVWX"
import Footer from "./Footer"

export default function App(){
    return(
        <div>
            <Header />
            <Switch>
                <Route exact path = "/" component = {Home}/>
                <Route exact path = "/about" component = {About}/>
                <Route exact path = "/AVWX" component = {AVWX}/>
            </Switch>
            <Footer />
        </div>
    )
    }