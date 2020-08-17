import React from "react";

import Navigation from "../components/Nav"
import Home from "../components/Home"
import Project from "../components/Project"
import About from "../components/About"
import Hobbies from "../components/Hobbies"
import Contact from "../components/Contact"

const App = () => {
    return (
        <>
            <main>
                <Navigation />
                <Home />
                <Project />
                <About />
                <Hobbies />
                <Contact />
            </main>

            <footer className="footer">
                <p>Made by Wasim Hamid.</p>
            </footer>
        </>
    );
}

export default App;
