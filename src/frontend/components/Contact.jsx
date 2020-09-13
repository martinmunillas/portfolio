import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';

import '../styles/components/Contact.scss';

class Contact extends Component {
  state = {};
  render() {
    const { data } = this.props;
    return (
      <div>
        <h1>
          <Fade bottom cascade>
            {' '}
            Contact.
          </Fade>
        </h1>
        <Fade bottom>
          <div className='contact-content'>
            <h1>
              Let’s create your next<br></br>
              <span className='amazing-color'>experience together</span>
            </h1>
            <a href={`mailto:${data.contactEmail}`} className='email'>
              {data.contactEmail}
            </a>
            <ul>
              {data.social.map((link, index) => (
                <li key={index}>
                  <a target='_blank' rel='noopener noreferrer' href={link.url}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
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

export default connect(mapStateToProps, null)(Contact);
