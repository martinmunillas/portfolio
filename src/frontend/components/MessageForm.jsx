import React, { useState } from 'react';
import axios from 'axios';

import '../styles/components/MessageForm.scss';

const MessageForm = () => {
  const [form, setForm] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault()
    // axios({
    //   method: 'post',
    //   url: '/send/newMessage',
    //   body: form,
    // });
    e.target.reset()
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
      <p>(Working soon, send me an email for now)</p>
      <div className='messageForm__fields'>
        <div>
          <label>Name</label>
          <input name="name" onChange={handleChange} type='text' />
          <label>Email</label>
          <input name="email" onChange={handleChange} type='text' />
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" onChange={handleChange} type='text' />
        </div>
      </div>
      <button type='submit' className='messageForm__submit'>
        Send
      </button>
    </form>
  );
};

export default MessageForm;
