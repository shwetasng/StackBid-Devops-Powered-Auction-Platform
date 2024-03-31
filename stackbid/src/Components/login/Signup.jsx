import React, { useState } from 'react';
import './Auth.css';

const Signup = ({ onSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Perform signup logic here
    // For now, we'll just log the email and password
    console.log('Signing up with email:', email, 'and password:', password);

    // Call the onSignup callback with user data if successful
    const user = { email }; // Assuming email is the user identifier
    onSignup(user);
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <input className="auth-input" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className="auth-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="auth-button" onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
