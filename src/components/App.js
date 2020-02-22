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
                <li class="menu-item"><a href="#Become-Member" data-scroll>Become a Member</a></li>
                <li class="menu-item"><a href="#Movement-Screen" data-scroll>Screen</a></li>
                <li class="menu-item"><a href="#Specialist-Training" data-scroll>Train</a></li>
                <li class="menu-item"><a href="#Train2" data-scroll>Team Training</a></li>
                <li class="menu-item"><a href="#Abstract" data-scroll>Abstract</a></li>
                <li class="menu-item"><a href="#Testimonials" data-scroll>Testimonials</a></li>
                <li class="menu-item"><a href="#Contact" data-scroll>Contact</a></li>
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
