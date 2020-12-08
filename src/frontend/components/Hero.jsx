import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';
import { Link } from 'react-scroll';

import '../styles/components/Hero.scss';

const Hero = (props) => {
  const { data } = props;
  return (
    <div className='hero'>
      <header className='hero__logo'>
        <h1>
          <Fade bottom cascade>
            martinmunilla.
          </Fade>
        </h1>
      </header>
      <Fade bottom>
        <p className='hero__text'>{data.heroText}</p>
        <div className='hero__buttons'>
          <button className='hero__buttons--buton contactButton'>
            <Link
              to='contact'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </button>
          <button className='hero__buttons--buton downloadButton'>
            <a rel='noopener noreferrer' href={data.cvUrl} target='_blank'>
              Download CV
            </a>
          </button>
        </div>
      </Fade>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.info,
  };
};

export default connect(mapStateToProps, null)(Hero);
