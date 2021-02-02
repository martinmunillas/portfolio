import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';

import MessageForm from './MessageForm';

import '../styles/components/Contact.scss';

const Contact = ({ data: { contactText, email, github, linkedin, youtube } }) => {
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
            {contactText[0]}
            <br></br>
            <span className='contact__content--title__amazingText'>{contactText[1]}</span>
          </h1>
          <p className='contact__content--email'>{email}</p>
          <MessageForm />
          <ul className='contact__content--social'>
            {github && (
              <li>
                <a target='_blank' rel='noopener noreferrer' href={github}>
                  Github
                </a>
              </li>
            )}
            {linkedin && (
              <li>
                <a target='_blank' rel='noopener noreferrer' href={linkedin}>
                  Linkedin
                </a>
              </li>
            )}
            {youtube && (
              <li>
                <a target='_blank' rel='noopener noreferrer' href={youtube}>
                  Youtube
                </a>
              </li>
            )}
          </ul>
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

export default connect(mapStateToProps, null)(Contact);
