import React from "react";
import css from "./Hobbies.module.css"


class Hobbies extends React.Component {
    render () {
  return (
    <>
        <section id="Hobbies-Page">
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
        </section>
    </>
    );
 }
}

export default Hobbies;
