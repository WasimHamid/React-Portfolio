import React from "react";
import "./css/styles.css"

import Home from "../components/Home"
import Project from "../components/Project"
import About from "../components/About"
import Hobbies from "../components/Hobbies"
import Contact from "../components/Contact"


// import "../components/js/scroll"
import "../components/js/responsive-nav"
import "../components/js/fixed-responsive-nav"
import "../components/js/fastclick"

class App extends React.Component {
    render () {
  return (
    <>
    <header>
        <a href="#home" className="logo" data-scroll>Wasim Hamid</a>
        <nav className="nav-collapse">
            <ul>
                <li className="menu-item active"><a href="#home" data-scroll>Home</a></li>
                <li className="menu-item"><a href="#Project-Page" data-scroll>Project Page</a></li>
                <li className="menu-item"><a href="#About-Me" data-scroll>About Me</a></li>
                <li className="menu-item"><a href="#Hobbies-Page" data-scroll>Hobbies Page</a></li>
                <li className="menu-item"><a href="#Contact" data-scroll>Contact Us</a></li>
            </ul>
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
