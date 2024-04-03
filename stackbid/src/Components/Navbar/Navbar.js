import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/signup', label: 'SignUp' },
    { path: '/seller-history', label: 'Seller History' },
    { path: '/upload-item', label: 'Upload Item' },
    { path: '/feedback', label: 'Feedback' },
    { path: '/about-us', label: 'About Us' },
  ];

  return (
    <nav className="navbar">
      <ul className="nav-links">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
