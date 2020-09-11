import React, { Component } from 'react';
import Project from './Project';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class Work extends Component {
    state = {  }
    render() { 
        return (<div>
        <h1 className='heading'>
        <Fade bottom cascade>Projects.</Fade></h1>
        <div className='work-content'>
                {data.projects.map((project)=>(
                    <Project key={project.id}
                             title = {project.title}
                             service = {project.service}
                             imageSrc = {project.imageSrc}
                             url={project.url}
                     ></Project>
                ))}
        </div>
        </div>  );
    }
}
 
export default Work;