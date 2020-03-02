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
    <Navbar className='header'>
        <NavbarBrand href="#home" class="logo" data-scroll>Wasim Hamid</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
            <Nav className='mr-auto' navbar>
                <NavItem>
                    <NavLink>Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>Project</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>Hobbies</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>Contact</NavLink>
                </NavItem>
            </Nav>
        </Collapse>   
    </Navbar>
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

export default App;
