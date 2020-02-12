import React, { Component } from "react";
import Navbar from "../Navbar/index";
import css from "./AboutPage.module.css";

import Button2 from "../Button/index";

class AboutPage extends Component {
  render() {
    return (
      <>
        <nav>
          <Navbar />
        </nav>
        <br/>
        <div className={css.notMobile}>
        <Button2 />
        </div>
        <br />
        <div className={css.scene}>
          <div className={css.cube}>
            <div className={css.back}></div>
            <div className={css.left}></div>
            <div className={css.right}></div>
            <div className={css.top}></div>
            <div className={css.bottom}></div>
            <div className={css.front}></div>
          </div>
        </div>
      </>
    );
  }
}

export default AboutPage;
