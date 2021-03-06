import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

import '../styles/components/ProjectItem.scss';

const ProjectItem = (props) => {
  return (
    <Fade bottom>
      <Link to={`/projects/${props._id}`}>
        <div className='projectItem'>
          <img src={props.mainImage} alt={props.name} className='projectItem__image' />
          <h1 className='projectItem__title'>{props.name}</h1>
          <p className='projectItem__service'>{props.service}</p>
        </div>
      </Link>
    </Fade>
  );
};

export default ProjectItem;
