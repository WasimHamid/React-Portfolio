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

        <p>React | JavaScript | HTML | CSS | Express | MongoDB | React Native</p>

        <div>
        <div className="social-links">
              <a
                href="http://linkedin.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/WasimHamid"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
          </div>
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
