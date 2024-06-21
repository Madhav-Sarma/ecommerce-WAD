import React from 'react'
import { useState } from 'react';

function Contact() {

    const [form, setForm] = useState({ username: '',email:'',message:''});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register:', form);
  };
  return (
    <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={form.username} onChange={handleChange} />
        </div>

        <div>
          <label>Email:</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} />
        </div>
        <div>
          <label>message:</label>
          <input type="text" name="message" value={form.message} onChange={handleChange} />
        </div>

        <button type="submit">Submit</button>
    </form>
  )
}

export default Contact