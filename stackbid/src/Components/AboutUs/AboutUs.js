import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-text">
        <h2>StackBid: Bid Smarter, Win Better, Experience Excellence!</h2>
        <h3>About Us</h3>
        <p className="about-us-content">
          We are a team of motivated individuals who identified a gap and absence of a plaform that connects the seller and bidder with different needs. We found the absence of a generalised auction platform which is not specific to cater a single category only but serve the demands from diverse array. Our mission is to provide seller and bidder a plaform where they can experience transparency and excellence together.
        </p>
        <div className="buttons-container">
          <button className="sign-up-button">Sign Up</button>
          <button className="sign-in-button">Sign In</button>
        </div>
      </div>
      <div className="about-us-image">
        {/* Use require() function to dynamically load the image */}
        <img src={require('./AboutUs.png').default} alt="About Us" />
      </div>
    </div>
  );
};

export default AboutUs;
