import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactImageGallery from 'react-image-gallery';

import Background from '../components/Background';

import '../styles/pages/ProjectPage.scss';
import 'react-image-gallery/styles/scss/image-gallery.scss';

const ProjectPage = (props) => {
  const { id } = props.match.params;
  const { name, service, description, mainImage, video, demo, repo, images } = props.projects.find(
    (project) => project._id == id
  );

  const carouselItems = images.map((url) => ({ thumbnail: url, original: url }));

  return (
    <>
      <Background />
      <div className='projectPage'>
        <Link to='/' className='projectPage__goBack'>
          ← Go back
        </Link>
        <h1 className='projectPage__title'>{name}</h1>
        <h4 className='projectPage__service'>{service}</h4>
        <div className='projectPage__hero'>
          <img src={mainImage} alt='' className='projectPage__hero--img' />
          <div className='projectPage__hero--buttons'>
            {repo && (
              <a
                href={repo}
                target='_blank'
                rel='noopener noreferrer'
                className='button projectPage__hero--buttons__repoButton'
              >
                Repository
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target='_blank'
                rel='noopener noreferrer'
                className='button projectPage__hero--buttons__demoButton'
              >
                Demo
              </a>
            )}
          </div>
        </div>
        <div className='projectPage__description'>
          {description.split('\n').map((para, i) => (
            <React.Fragment key={i}>
              <p>{para}</p>
              <br />
            </React.Fragment>
          ))}
        </div>
        {images.length || video ? (
          <>
            <h1 style={{ textDecoration: 'underline' }}>Media</h1>
            <br />
            {video ? (
              <>
                <h2>Video</h2>
                <video src={video} controls className='projectPage__video' />
              </>
            ) : null}
            <br />
            {images.length ? (
              <>
                <h2 style={{ marginBottom: '10px' }}>Images</h2>
                <ReactImageGallery items={carouselItems} />
              </>
            ) : null}
          </>
        ) : null}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({ projects: state.projects });

export default connect(mapStateToProps, null)(ProjectPage);
