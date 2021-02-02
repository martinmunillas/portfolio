import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';

import '../styles/components/Projects.scss';

const Projects = ({ projects, github }) => {
    return (
      <div className='projects'>
        <h1 className='projects__heading'>
          <Fade bottom cascade>
            Projects.
          </Fade>
        </h1>
        <div className='projects__content'>
          {projects.map((project, index) => (
            <ProjectItem {...project} key={index}/>
          ))}
        </div>
        <a href={github} target='_blank' rel='noopener noreferrer' style={{textDecoration: 'underline'}}>Check all my projects on my github →</a>
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects.slice(0,4),
    github: state.info.github
  };
};

export default connect(mapStateToProps, null)(Projects);
