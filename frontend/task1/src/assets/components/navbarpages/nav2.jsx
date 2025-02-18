import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate,Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSignInAlt, faUserPlus, faBars, faTimes  } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import "./nav3.css"

function Nav2() {
  const [profile, setProfile] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle
  const profileDivRef = useRef(null);
  const navigate = useNavigate();
  const [adminview,setAdmin] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const loggedInUser = localStorage.getItem('data');
    if(loggedInUser == "admin@gmail.com"){
      setAdmin(true)
    }
    if (loggedInUser) {
      axios.post("http://localhost:5001/req-roll", { "email": loggedInUser })
        .then(res => {
          if (profileDivRef.current) {
            profileDivRef.current.style.backgroundImage = `url("https://info.aec.edu.in/ACET/StudentPhotos/${res.data}.jpg")`;
            profileDivRef.current.style.backgroundSize = "100% 100%";
          }
          setProfile(true);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('data');
    setProfile(false);
    navigate('/');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the mobile menu state
  };

  return (
    <>    <header className="navbar">
      <div className="logo">
        <img src="iship2.jpg" alt="Multiio Logo" />
        <span style={{fontWeight:"800", fontSize:"30px"}}>Blood care</span>
      </div>

      {/* Desktop navigation options */}
      <nav className="nav-options desktop-nav">
        <div className="options"><Link to="/" className='Lin_k'>Dashboard</Link></div>
        <div className="options"><Link to="/register" className='Lin_k'>Register</Link></div>
        <div className="options"><Link to="/procedure" className='Lin_k'>Procedure</Link></div>
        {
          adminview ? (
        <div className="options"><Link to="/admin" className='Lin_k'>Admin</Link></div>
          ):(
            <></>
          )
        }
        <div className="options"><Link to="/" className='Lin_k'><a href="../footer/footer"></a>About</Link></div>
      </nav>

      {/* Auth buttons for desktop view */}
      <div className="auth-buttons desktop-auth">
        {profile ? (
          <>
            <div className="login_profile" id="i" ref={profileDivRef}></div>
            <div className='log_out_1' onClick={handleLogout}>Logout</div>
          </>
        ) : (
          <>
            <Link to="/login" className="login"><FontAwesomeIcon icon={faSignInAlt} /> login</Link>
            <Link to="/signup" className="signup"><FontAwesomeIcon icon={faUserPlus} /> signup</Link>
          </>
        )}
      </div>
      {/* <div className='mobile-menu'>abc</div> */}
      <div className="mobile-menu">
        <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2x" />
        </div>
        <div className={`${isOpen ? 'm_o1' : 'm_o2'}`}>
        <nav className={`menu-items ${true ? 'open' : ''}`}>
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/procedure">Procedure</Link></li>
            <li><Link to="/admin">Admin</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          
          {/* Auth buttons for mobile view */}
          <div className="auth-buttons mobile-auth">
            {profile ? (
              <>
                {/* <div className="login_profile" id="i" ref={profileDivRef}></div> */}
                <div className='log_out_1 l_11' onClick={handleLogout}>Logout</div>
              </>
            ) : (
              <>
                <Link to="/login" className="login l"><FontAwesomeIcon icon={faSignInAlt} /> login</Link>
                <Link to="/signup" className="signup s"><FontAwesomeIcon icon={faUserPlus} /> signup</Link>
              </>
            )}
          </div>
        </nav>
        </div>
      </div>
    </header>
    {/* <Im1/> */}
  {/* <Outlet/> */}
    {/* <Studnet_dash/> */}
     {/* <Footer/>  */}
    </>
  );
}

export default Nav2;
