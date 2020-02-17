import React, { useState, useEffect } from "react";
import css from "./Project.module.css";


import {  projects  } from "../../constants"
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
      <div>
        {projects.map(({url, title, imageSrc,service}, index) => (
          <ProjectData 
          key={index}
          url={url}
          title={title}
          imageSrc={imageSrc}
          service={service}
          />
        ))}
      </div>
      </section>
    </>
  );
}

export default Project;
