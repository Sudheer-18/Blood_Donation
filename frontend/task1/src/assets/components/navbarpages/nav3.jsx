import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './nav2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus,faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import "./mobile_menu.css"

function Nav3() {
  const [profile, setProfile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const profileDivRef = useRef(null); // useRef to target the div
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const loggedInUser = localStorage.getItem('data');
    if (loggedInUser) {
      axios.post("http://localhost:5000/req-roll", { "email": loggedInUser })
        .then(res => {
          if (profileDivRef.current) {
            // Dynamically update background image using ref
            profileDivRef.current.style.backgroundImage = url("https://info.aec.edu.in/ACET/StudentPhotos/${res.data}.jpg");
            profileDivRef.current.style.backgroundSize = "100% 100%"
          }
          setProfile(true); // Set profile to true to show the profile div
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('data'); // Clear localStorage
    setProfile(false);
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <header className="navbar">
      <div className="logo">
        <img src="iship2.png" alt="Multiio Logo" />
        <span>blood care</span>
      </div>
      <nav className="nav-options">
        <div className="options">Dashboard</div>
        <div className="options">Register</div>
        <div className="options">Procedure</div>
        <div className="options">Admin</div>
        <div className="options">About</div>
      </nav>
      <div className="auth-buttons">
        {profile ? (
          <>
            {/* Use the ref to target this div */}
            <div className="login_profile" id="i" ref={profileDivRef}></div>
            <button className='log_out_1' onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="login"><FontAwesomeIcon icon={faSignInAlt} /> login</Link>
            <Link to="/signup" className="signup"><FontAwesomeIcon icon={faUserPlus} /> signup</Link>
          </>
        )}
      </div>
      <div className="mobile-menu">

      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2x" />
      </div>

      <nav className={menu-items `${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/register">Register</a></li>
          <li><a href="/procedure">Procedure</a></li>
          <li><a href="/admin">Admin</a></li>
          <li><a href="/about">About</a></li>
        </ul>
        </nav>
    </div>

    </header>
  );
}

export default Nav3;