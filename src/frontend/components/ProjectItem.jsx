import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom'

import '../styles/components/ProjectItem.scss';

class ProjectItem extends Component {
  state = {};
  render() {
    return (
      <Fade bottom>
        <Link to={`/projects/${this.props.id}`}>
          <div className='projectItem'>
              <img src={this.props.imageSrc} alt={this.props.title} className='projectItem__image'/>
            <h1 className='projectItem__title'>{this.props.title}</h1>
            <p className='projectItem__service'>{this.props.service}</p>
          </div>
        </Link>
      </Fade>
    );
  }
}

export default ProjectItem;
