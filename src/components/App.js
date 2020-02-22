import React from "react";

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
        <nav class="nav-collapse">
            <ul>
                <li class="menu-item active"><a href="#home" data-scroll>Home</a></li>
                <li class="menu-item"><a className="menu-item" href="#Project-Page" data-scroll>Project Page</a></li>
                <li class="menu-item"><a className="menu-item" href="#About-Me" data-scroll>About Me</a></li>
                <li class="menu-item"><a className="menu-item" href="#Hobbies-Page" data-scroll>Hobbies Page</a></li>
                <li class="menu-item"><a className="menu-item" href="#Contact" data-scroll>Contact Us</a></li>
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
