import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Background from '../components/Background';

import '../styles/pages/ProjectPage.scss';

const ProjectPage = (props) => {
  const { id } = props.match.params;
  const {
    title,
    service,
    description,
    imageSrc,
    appUrl,
    repository,
  } = props.projects.find((project) => project.id == id);
  return (
    <>
      <Background />
      <div className='projectPage'>
        <Link to='/' className='projectPage__goBack'>
          ← Go back
        </Link>
        <h1 className='projectPage__title'>{title}</h1>
        <h4 className='projectPage__service'>{service}</h4>
        <div className='projectPage__hero'>
          <img src={imageSrc} alt='' className='projectPage__hero--img' />
          <div className='projectPage__hero--buttons'>
            {repository.map((repo, index) => (
              <a href={repo.url} target='_blank' rel='noopener noreferrer'>
                <button
                  key={index}
                  className='projectPage__hero--buttons__repoButton'
                >
                  {repo.name}
                </button>
              </a>
            ))}
            <a href={appUrl} target='_blank' rel='noopener noreferrer'>
              <button className='projectPage__hero--buttons__appButton'>
                Open app preview
              </button>
            </a>
          </div>
        </div>
        <p className='projectPage__description'>{description}</p>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({ projects: state.projects });

export default connect(mapStateToProps, null)(ProjectPage);
