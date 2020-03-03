import React from "react";

import Navigation from "../Nav"

import Pdf from "../Documents/WasimHamidCV.pdf";
import css from "./Home.module.css";

class Home extends React.Component {
    render () {
  return (
    <>
        <section id="home" data-module-id="screen">
        <Navigation/>
        <div className={css.bannertext}>
        <h2>Junior Developer</h2>

        <p>React | JavaScript | HTML | CSS | Express | MongoDB | React Native</p>

        <div>
          <a
            className={css.button1}
            href={Pdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>
        </section>
    </>
    );
 }
}

export default Home;
