import React, { Component } from 'react';
import Project from './Project';
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';

class Work extends Component {
  state = {};
  render() {
    const { data } = this.props;
    return (
      <div>
        <h1 className='heading'>
          <Fade bottom cascade>
            Projects.
          </Fade>
        </h1>
        <div className='work-content'>
          {data.projects.map((project) => (
            <Project
              key={project.id}
              title={project.title}
              service={project.service}
              imageSrc={project.imageSrc}
              url={project.url}
            ></Project>
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

export default connect(mapStateToProps, null)(Work);
