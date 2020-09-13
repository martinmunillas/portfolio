import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';

import '../styles/components/About.scss';

class About extends Component {
  state = {};
  render() {
    const { data } = this.props;
    return (
      <div className='about'>
        <div className='about__content'>
          <h1 className='about__content--title'>
            <Fade bottom cascade>
              About.
            </Fade>
          </h1>
          <Fade bottom>
            <p className='about__content--text'>
              {data.abouttext.map((paragraph) => (
                <>
                  <br /><br /> {paragraph}
                </>
              ))}
            </p>
          </Fade>
        </div>
        {data.ShowAboutImage ? (
          <div className='about__image'>
            <img src={data.aboutImage} alt='about image' />
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state,
  };
};

export default connect(mapStateToProps, null)(About);
