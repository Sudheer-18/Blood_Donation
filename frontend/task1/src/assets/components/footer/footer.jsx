import React from "react";
import "./Footer.css"; // External CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const Footer = () => {
  const fun = (e) => {
    e.preventDefault(); // Prevent default form submission
    const data = document.getElementsByClassName('fotter_mail')[0].value;
    const d = {
      mail: ""
    };
    // console.log(data)
    d.mail = data;
    console.log(d);

    axios.post("http://localhost:5001/send-mail-footer", d)
      .then(res => {
        console.log("it's working");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <footer className="footer-footer">
      {/* Blood Donation Slogan and Image */}
      <div className="footer-slogan-image">
        <div className="footer-slogan">
          <h2>“Donate Blood, Save Lives”</h2>
          <p>Your donation today can save a life tomorrow.</p>
        </div>
        <div className="footer-blood-image">
          <img
            src="https://example.com/blood-donation-image.jpg"
            alt="Blood Donation"
          />
        </div>
      </div>

      {/* Address and Contact Info */}
      <div className="footer-contact">
        <h3 style={{ top: "0px" }}>Contact Us</h3>
        <div className="footer-contact-info">
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Technical Hub, Surampalem, Andhra Pradesh, India</p>
          <p><FontAwesomeIcon icon={faPhone} /> +91 123 456 7890</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> support@blooddonation.org</p>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="footer-social-media">
        <h3 style={{ top: "0px" }}>Follow Us</h3>
        <div className="footer-social-m">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>

      {/* Blood Donation Trusts */}
      <div className="footer-trusts">
        <h3 style={{ top: "0px" }}>Blood Donation Trusts</h3>
        <ul>
          <li>Red Cross Society</li>
          <li>Blood Bank Trust</li>
          <li>Life Saver Foundation</li>
          <li>National Blood Transfusion Council</li>
        </ul>
      </div>

      {/* Developer Section with Slider */}
      {/* <div className="footer-developers">
        <h3>Website Developers</h3>
        <div className="footer-developers-grid">
          <div className="footer-developer">
            <img src="https://info.aec.edu.in/ACET/StudentPhotos/22P31A0424.jpg" alt="Sudheer" />
            <p>Sudheer</p>
          </div>
          <div className="footer-developer">
            <img src="https://info.aec.edu.in/ACET/StudentPhotos/22P31A0407.jpg" alt="Sudheer" />
            <p>Sudheer</p>
          </div>
          <div className="footer-developer">
            <img src="https://info.aec.edu.in/ACET/StudentPhotos/22P31A0424.jpg" alt="Sudheer" />
            <p>Sudheer</p>
          </div>
        </div>
      </div> */}

      {/* Newsletter Signup */}
      <div className="footer-newsletter">
        <h3 style={{ top: "0px" }}>Subscribe to our Newsletter</h3>
        <form onSubmit={fun}>
          <input type="email" placeholder="Enter your email"  className="fotter_mail"required />
          <button type="submit">Subscribe</button>
        </form>
        <p>Get the latest updates and news about blood donation directly in your inbox.</p>
      </div>
    </footer>
  );
};

export default Footer;
