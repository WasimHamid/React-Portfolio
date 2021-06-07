import React from "react";

import Pdf from "../Documents/WasimHamidCV.pdf";
import css from "./Home.module.css";

class Home extends React.Component {
    render () {
  return (
    <>
        <section id="home" data-module-id="screen">
        <div className={css.bannertext}>
        <h2>Junior Developer</h2>

<<<<<<< HEAD
        <p>React | JavaScript | HTML | CSS | Git/Github</p>
=======
        <p>React | JavaScript | HTML | CSS | Git/Github | React Native</p>
>>>>>>> c2e14cf866264b56c326af589752bba1bff6a2ba

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
