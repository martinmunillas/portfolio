import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import '../styles/components/ProjectItem.scss';

class ProjectItem extends Component {
  state = {};
  render() {
    return (
      <Fade bottom>
        <a href={this.props.url}>
          <div className='projectItem'>
              <img src={this.props.imageSrc} alt={this.props.title} className='projectItem__image'/>
            <h1 className='projectItem__title'>{this.props.title}</h1>
            <p className='projectItem__service'>{this.props.service}</p>
          </div>
        </a>
      </Fade>
    );
  }
}

export default ProjectItem;
