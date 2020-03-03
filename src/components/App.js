import React, { useState } from "react";

import Home from "../components/Home"
import Project from "../components/Project"
import About from "../components/About"
import Hobbies from "../components/Hobbies"
import Contact from "../components/Contact"

import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink} from 'reactstrap'

const App = () => {
    const [isOpen, setIsOpen] = useState(false)
     const toggle = () => setIsOpen(!isOpen)
  return (
    <>
    <main>
        <Navbar color="faded" light>
            <NavbarBrand href="#home" class="logo" data-scroll>Wasim Hamid</NavbarBrand>
            <NavbarToggler onClick={toggle} className="mr-2"/>
            <Collapse isOpen={isOpen} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink href="#home">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#Project-Page">Project</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#About-Me">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#Hobbies-Page">Hobbies</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#Contact">Contact</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>   
        </Navbar>
  
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

export default App;
