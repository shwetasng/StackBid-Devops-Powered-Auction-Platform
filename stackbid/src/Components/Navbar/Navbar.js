// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <h1>StackBid</h1>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-item">AboutUs</Link>
        </li>
        <li>
          <Link to="/login" className="nav-item">Login</Link>
        </li>
        <li>
          <Link to="/signup" className="nav-item">Signup</Link>
        </li>
        <li>
          <Link to="/sellerHistory" className="nav-item">Seller History</Link>
        </li>
        <li>
          <Link to="/uploadItem" className="nav-item">Upload Item</Link>
        </li>
        <li>
          <Link to="/feedback" className="nav-item">Feedback</Link>
        </li>
        <li>
          <Link to="/profile" className="nav-item">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
