import React, { useState } from 'react';

const Registration = () => {
  const [form, setForm] = useState({ username: '',firstname:'',lastname:'', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register:', form);
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={form.username} onChange={handleChange} />
        </div>


        <div>
          <label>Password:</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} />
        </div>

        <div>
          <label>retype password</label>
          <input type="password" name="repassword" value={form.username} onChange={handleChange} />
        </div>

        <div>
          <label>First name:</label>
          <input type="text" name="firstname" value={form.username} onChange={handleChange} />
        </div>

        <div>
          <label>Last name:</label>
          <input type="text" name="lastname" value={form.username} onChange={handleChange} />
        </div>

        <div>
          <label>Dob:</label>
          <input type="date" name="Dob" value={form.username} onChange={handleChange} />
        </div>

        <div>
          <label>Email:</label>
          <input type="email" name="email" value={form.username} onChange={handleChange} />
        </div>

        <div>
          <label>Username:</label>
          <input type="text" name="username" value={form.username} onChange={handleChange} />
        </div>

        <div>
          <label>Username:</label>
          <input type="text" name="username" value={form.username} onChange={handleChange} />
        </div>

        <div>
          <label>Username:</label>
          <input type="text" name="username" value={form.username} onChange={handleChange} />
        </div>

        <div>
          <label>Username:</label>
          <input type="text" name="username" value={form.username} onChange={handleChange} />
        </div>

        <div>
          <label>Username:</label>
          <input type="text" name="username" value={form.username} onChange={handleChange} />
        </div>

        <div>
          <label>Username:</label>
          <input type="text" name="username" value={form.username} onChange={handleChange} />
        </div>

        
        <button type="submit">Register</button>
      </form>

    </div>
  );
};

export default Registration;
