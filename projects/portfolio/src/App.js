import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Home from "./Home";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

export default function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}
