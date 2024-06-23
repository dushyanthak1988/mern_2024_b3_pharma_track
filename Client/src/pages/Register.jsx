import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import backgroundImage from '../assets/images/register_background.jpg'; // Ensure you have this image in your assets

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('pharmacist');
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      await register({ username, password, role });
      navigate('/login');
    } catch (error) {
      console.error(error);
      alert('Error registering user');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.title}>Create an Account</h1>
        <p style={styles.subtitle}>Sign up to start managing your Pharmacy Inventory</p>
        <form onSubmit={registerHandler} style={styles.form}>
          <label htmlFor="email" style={styles.label}>Email Address</label>
          <input
            type="text"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={styles.input}
          />

          <label htmlFor="password" style={styles.label}>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />

          <label htmlFor="role" style={styles.label}>Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={styles.select}
          >
            <option value="admin">Admin</option>
            <option value="pharmacist">Pharmacist</option>
          </select>

          <button type="submit" style={styles.button}>Register</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
  },
  title: {
    marginBottom: '20px',
    color: '#333',
  },
  subtitle: {
    marginBottom: '20px',
    color: '#555',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '5px',
    textAlign: 'left',
    color: '#333',
  },
  input: {
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  select: {
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default Register;
