import React, { Component } from 'react';

const ProjectData = ({
title = "Client Website",
service = "Redesign Website",
imageSrc = "https://images.unsplash.com/photo-1558104631-0fa41a8f6c20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
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