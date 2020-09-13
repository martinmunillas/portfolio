import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import '../styles/components/Project.scss';

class ProjectItem extends Component {
  state = {};
  render() {
    return (
      <Fade bottom>
        <div className='projectItem'>
          <a href={this.props.url}>
            <img src={this.props.imageSrc} alt={this.props.title} className='projectItem__image'></img>
          </a>
          <h1 className='projectItem__title'>{this.props.title}</h1>
          <p className='projectItem__service'>{this.props.service}</p>
        </div>
      </Fade>
    );
  }
}

export default ProjectItem;
