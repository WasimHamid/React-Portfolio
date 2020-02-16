import React, { useState, useEffect } from "react";
import css from "./Project.module.css";


import data2 from "../data"
import ProjectData from "../projectdata"

function Project() {
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
      <section id="Project-Page">
      <div>
        <img src={avatar} alt="pic" className={css.imgy} />
        <h1>{name}</h1>
        <h2>{username}</h2>
        <a href="https://github.com/WasimHamid?tab=repositories">
          {repos} Repos
        </a>
      </div>
<<<<<<< HEAD
      <div>
        {data2.map(({}, index) => (
          <ProjectData />
        ))}
      </div>
=======
>>>>>>> 077b0bb086017287c8ec9a24cac75a67d8c6e874
      </section>
    </>
  );
}

export default Project;
