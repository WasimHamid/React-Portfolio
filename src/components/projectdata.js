import React, { Component } from 'react';
import image from "../img/Playermade.png"

const ProjectData = ({
title = "Client Website",
service = "Redesign Website",
imageSrc = image,
url = "http://playermade-wasim.netlify.com/"
}) => {
     return ( 
         <>
            <div className='project'>
            <a href={url}>
                <img src={imageSrc} alt={title}></img>
            </a>
                <h1>{title}</h1>
                <span>{service}</span>
            </div> 
        </>
     );
}
 
export default ProjectData;