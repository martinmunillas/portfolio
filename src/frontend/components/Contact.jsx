import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';

import MessageForm from './MessageForm';

import '../styles/components/Contact.scss';

class Contact extends Component {
  state = {};
  render() {
    const { data } = this.props;
    return (
      <div className='contact'>
        <h1 className='contact__header'>
          <Fade bottom cascade>
            Contact.
          </Fade>
        </h1>
        <Fade bottom>
          <div className='contact__content'>
            <h1 className='contact__content--title'>
              Let’s create your next<br></br>
              <span className='contact__content--title__amazingText'>
                experience together
              </span>
            </h1>
            <p className='contact__content--email'>{data.contactEmail}</p>
            <MessageForm />
            <ul className='contact__content--social'>
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
