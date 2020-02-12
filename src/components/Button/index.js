import React from "react";
import { Link } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/src/styles/styles.scss";

function Button() {
  return (
    <div>
      <Link to="/">
        <AwesomeButton type="secondary">Home</AwesomeButton>
      </Link>
      <Link to="/projects">
        <AwesomeButton type="secondary">Github</AwesomeButton>
      </Link>
      <Link to="/aboutme">
        <AwesomeButton type="secondary">AboutMe</AwesomeButton>
      </Link>
      <a href="https://wasimhamidcontact.netlify.com">
        <AwesomeButton type="secondary">Contact</AwesomeButton>
      </a>
    </div>
  );
}

export default Button;
