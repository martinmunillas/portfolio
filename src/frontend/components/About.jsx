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
              {data.aboutMessage.split('\n').map((paragraph, index) => (
                <React.Fragment key={index}>
                  <br />
                  <br /> {paragraph}
                </React.Fragment>
              ))}
            </p>
          </Fade>
        </div>
        <div className='about__image'>
          <img src={data.aboutImage} alt='about image' />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.info,
  };
};

export default connect(mapStateToProps, null)(About);
