import React from "react";

import Pdf from "../Documents/WasimHamidCV.pdf";
import css from "./Home.module.css";

class Home extends React.Component {
    render () {
  return (
    <>
        <section id="home" data-module-id="screen">
        <div className={css.bannertext}>
        <h2>Junior Engineer</h2>

        <p>React | JavaScript | HTML | CSS | Git/Github</p>

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
