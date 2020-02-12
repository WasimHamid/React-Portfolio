import React from "react";
import css from "./Navbar.module.css";
import Button from "../Button/index";

function Navbar() {
  return (
    <div>
      <header className={css.header}>
        <nav className={css.container}>
          {/* <div className={css.left}>Wasim Hamid</div> */}
          <h1 className={css.hometitle}>
            <span className={css.Left}>Wasim Hamid</span>
          </h1>
          <div className={css.right}>
            <Button />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
