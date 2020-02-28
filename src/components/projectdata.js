import React, { Component } from 'react';
import Image from "./Image"

const ProjectData = ({
title = "Client Website",
service = "Redesign Website",
imageSrc = "Image",
url = "http://playermade-wasim.netlify.com/"
}) => {
     return ( 
         <>
            <div className='project'>
            <a href={url}>
                <Image/>
            </a>
               <p>(Click image to view Website)</p>
                <h1>{title}</h1>
                <span>{service}</span>
            </div> 
        </>
     );
}
 
export default ProjectData;
