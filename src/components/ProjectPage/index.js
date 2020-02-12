import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/index";

import css from "./ProjectPage.module.css";
import Button2 from "../Button/index";

function ProjectPage() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [repos, setRepos] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/WasimHamid")
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  }, []);

  const setData = ({ name, login, public_repos, avatar_url }) => {
    setName(name);
    setUsername(login);
    setRepos(public_repos);
    setAvatar(avatar_url);
  };

  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <br />
      <div className={css.notMobile}>
        <Button2 />
      </div>
      <br />
      <div className={css.card}>
        <img src={avatar} alt="pic" className={css.imgy} />
        <h1>{name}</h1>
        <h2>{username}</h2>
        <a href="https://github.com/WasimHamid?tab=repositories">
          {repos} Repos
        </a>
      </div>
    </>
  );
}

export default ProjectPage;
