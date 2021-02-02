import React, { useState } from 'react';
import { connect } from 'react-redux';

import { sendMessage } from '../redux/actions';

import '../styles/components/MessageForm.scss';

const MessageForm = (props) => {
  const init = { name: '', email: '', message: '' };
  const [form, setForm] = useState(init);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError(true);
      return;
    }
    props.sendMessage(form);
    setSuccess(true);
    setForm(init);
  };

  const handleChange = (e) => {
    setError(false);
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
          <input name='name' onChange={handleChange} type='text' value={form.name} />
          <label>Email</label>
          <input name='email' onChange={handleChange} type='text' value={form.email} />
        </div>
        <div>
          <label>Message</label>
          <textarea name='message' onChange={handleChange} type='text' value={form.message} />
        </div>
      </div>
      <button type='submit' className='messageForm__submit'>
        Send
      </button>
      {success && <p className='success'>Message sent succesfully</p>}
      {error && <p className='error'>All fields are required</p>}
    </form>
  );
};

const mapDispatch = {
  sendMessage,
};

export default connect(null, mapDispatch)(MessageForm);
