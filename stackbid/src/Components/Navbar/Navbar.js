// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Logo</h1>
      </div>
      <div className="navbar-right">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/sellerhistory">Seller History</Link>
          </li>
          <li className="nav-item">
            <Link to="/aboutus">About Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
