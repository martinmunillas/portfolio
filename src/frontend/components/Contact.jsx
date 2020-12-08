import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';

import MessageForm from './MessageForm';

import '../styles/components/Contact.scss';

const Contact = (props) => {
  const { data } = props;
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
            {data.contactText[0]}<br></br>
            <span className='contact__content--title__amazingText'>{data.contactText[1]}</span>
          </h1>
          <p className='contact__content--email'>{data.email}</p>
          <MessageForm />
          <ul className='contact__content--social'>
            <li>
              <a target='_blank' rel='noopener noreferrer' href={data.github}>
                Github
              </a>
            </li>
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
