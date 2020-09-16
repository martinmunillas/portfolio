import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';

import '../styles/components/Projects.scss';

class Projects extends Component {
  state = {};
  render() {
    const { data } = this.props;
    return (
      <div className='projects'>
        <h1 className='projects__heading'>
          <Fade bottom cascade>
            Projects.
          </Fade>
        </h1>
        <div className='projects__content'>
          {data.projects.map((project, index) => (
            <ProjectItem {...project} key={index}/>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state,
  };
};

export default connect(mapStateToProps, null)(Projects);
