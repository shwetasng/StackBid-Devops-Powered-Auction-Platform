
import React, { useState } from 'react';
import './Auth.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    // For now, we'll just log the email and password
    console.log('Logging in with email:', email, 'and password:', password);

    // Call the onLogin callback with user data if successful
    const user = { email }; // Assuming email is the user identifier
    onLogin(user);
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <input className="auth-input" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className="auth-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="auth-button" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
