import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';

const Register = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { register } = useAuth();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(credentials);
      // Redirect or show success message
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" value={credentials.email} onChange={handleChange} placeholder="Email" />
      <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
