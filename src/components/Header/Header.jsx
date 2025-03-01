import React from 'react';
import './header.css';
import { FaHome, FaUser, FaCog } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className="header">
      <h1 className="header-title">Header</h1>
      <div className="nav-buttons">
        <Link to='/'>
        <button className="nav-button">
          <FaHome className="icon" />
          Home
        </button>
        </Link>
        <Link to='/about'>
        <button className="nav-button">
          <FaUser className="icon" />
          About
        </button>
        </Link>
        <Link to='contact'>
        <button className="nav-button">
          <FaCog className="icon" />
          Contacts
        </button>
        </Link>
        <Link to='service'>
        <button className="nav-button">
          <FaUser className="icon" />
          Service
        </button>
        </Link>
        <Link to='general'>
        <button className="nav-button">
          <FaHome className="icon" />
         General
        </button>
        </Link>
        <Link to='info'>
        <button className="nav-button">
          <FaHome className="icon" />
        Info
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
