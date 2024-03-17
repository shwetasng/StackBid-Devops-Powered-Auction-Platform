import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-text">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          fermentum semper porta. Nunc diam velit, adipiscing ut tristique
          vitae, sagittis vel odio. Maecenas convallis ullamcorper ultricies.
          Curabitur ornare, ligula a dapibus pellentesque, nisi lectus
          vestibulum odio, nec convallis orci nisi nec dolor. Vestibulum
          consequat ultricies ipsum et consectetur. Etiam varius pellentesque
          bibendum. Integer eget orci non sapien iaculis feugiat id eget dolor.
          Morbi malesuada nisi sit amet metus tincidunt blandit. Duis nec
          ligula vel dui consequat tristique. Suspendisse potenti. Nam vitae
          libero mauris. Suspendisse vitae libero mauris.
        </p>
        <div className="buttons-container">
          <button className="sign-up-button">Sign Up</button>
          <button className="sign-in-button">Sign In</button>
        </div>
      </div>
      <div className="about-us-image">
        <img src="path/to/image.jpg" alt="About Us" />
      </div>
    </div>
  );
};

export default AboutUs;
