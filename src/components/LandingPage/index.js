import React from "react";

import Pdf from "../Documents/WasimHamidCV.pdf";
import Navbar from "../Navbar/index";
import css from "./LandingPage.module.css";

import Button2 from "../Button/index";

function Landing() {
  return (
    <div className={css.android}>
      <nav>
        <Navbar />
      </nav>
      <br/>
      <div className={css.notMobile}>
        <Button2 />
      </div>
      <br />
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
    </div>
  );
}

export default Landing;
