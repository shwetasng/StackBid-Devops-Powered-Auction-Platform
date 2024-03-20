import React, { useState } from 'react';
import './feedback.css';

const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedbackText, setFeedbackText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add logic to handle the feedback submission
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Feedback:', feedbackText);
    // Clear the form fields after submission
    setName('');
    setEmail('');
    setFeedbackText('');
  };

  return (
    <div className="feedback-container">
      <h2>Give Feedback</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="feedback">Feedback</label>
          <textarea
            id="feedback"
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Feedback;
