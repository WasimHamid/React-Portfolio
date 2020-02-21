import React from "react";
import { stack as Menu } from 'react-burger-menu'

import Home from "../components/Home"
import Project from "../components/Project"
import About from "../components/About"
import Hobbies from "../components/Hobbies"
import Contact from "../components/Contact"

class App extends React.Component {
  showSettings (event) {

    event.preventDefault();

    .

    .

    .

  }

    render () {
  return (
    <>
    <header>
        <a href="#home" className="logo" data-scroll>Wasim Hamid</a>
        <Menu>
            <a href="#home" data-scroll>Home</a>
            <a href="#Project-Page" data-scroll>Project Page</a>
            <a href="#About-Me" data-scroll>About Me</a>
            <a href="#Hobbies-Page" data-scroll>Hobbies Page</a>
            <a href="#Contact" data-scroll>Contact Us</a>
            <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
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
