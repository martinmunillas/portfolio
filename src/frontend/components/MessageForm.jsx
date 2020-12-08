import React, { useState } from 'react';
import { connect } from 'react-redux';

import { sendMessage } from '../redux/actions';

import '../styles/components/MessageForm.scss';

const MessageForm = (props) => {
  const [form, setForm] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    props.sendMessage(form);
    e.target.reset();
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className='messageForm' onSubmit={handleSubmit}>
      <h1 className='messageForm__formName'>Leave me a message </h1>
      <div className='messageForm__fields'>
        <div>
          <label>Name</label>
          <input name='name' onChange={handleChange} type='text' />
          <label>Email</label>
          <input name='email' onChange={handleChange} type='text' />
        </div>
        <div>
          <label>Message</label>
          <textarea name='message' onChange={handleChange} type='text' />
        </div>
      </div>
      <button type='submit' className='messageForm__submit'>
        Send
      </button>
    </form>
  );
};

const mapDispatch = {
  sendMessage,
};

export default connect(null, mapDispatch)(MessageForm);
