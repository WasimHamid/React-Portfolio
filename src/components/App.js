import React from "react";

import { Navigation } from "react-mdl";

import Home from "../components/Home"
import Project from "../components/Project"
import About from "../components/About"
import Hobbies from "../components/Hobbies"
import Contact from "../components/Contact"

class App extends React.Component {
 render () {
  return (
    <>
    <header>
        <a href="#home" class="logo" data-scroll>Wasim Hamid</a>
        <nav class="nav-collapse">
            <Navigation>
                <a href="#home" data-scroll>Home</a>
                <a className="menu-item" href="#Project-Page" data-scroll>Project Page</a>
                <a className="menu-item" href="#About-Me" data-scroll>About Me</a>
                <a className="menu-item" href="#Hobbies-Page" data-scroll>Hobbies Page</a>
                <a className="menu-item" href="#Contact" data-scroll>Contact Us</a>
            </Navigation>
        </nav>
    </header>
    <main>

        
        <Home />
        <Project />
        <About />
        <Hobbies />
        <Contact />

    </main>

    <footer className="footer">
        <p>Wasim Hamid 2020</p>
    </footer>
    </>
    );
 }
}

export default App;
