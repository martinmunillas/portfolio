import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';

import '../styles/components/Hero.scss';

class Hero extends Component {
  state = {};

  render() {
    const { data } = this.props;
    return (
      <div className='hero'>
        <header className='hero__logo'>
          <h1>
            <Fade bottom cascade>
              {data.name}
            </Fade>
          </h1>
        </header>
        <Fade bottom>
          <p className='hero__text'>{data.headerTagline.join(' ')}</p>
          <div className="hero__buttons">
            <button className='hero__buttons--buton contactButton'>
              <a href={`mailto:${data.contactEmail}`} rel='noopener noreferrer'>
                Contact
              </a>
            </button>
            <button className='hero__buttons--buton downloadButton'>
              <a rel='noopener noreferrer'>Download CV</a>
            </button>
          </div>
        </Fade>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state,
  };
};

export default connect(mapStateToProps, null)(Hero);
