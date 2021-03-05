import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="info">
          <h4>Magnus International</h4>
          <p>
            Uttam Nagar East,
            <br /> New Delhi, 110059
          </p>
          <p className="num">
            <i class="fas fa-phone-alt"></i>+1-2345-6789-000
          </p>
          <p>
            <i class="far fa-envelope-open"></i>contact@Magnus.edu
          </p>
        </div>
        <div className="o-c">
          <h4>Our Campus</h4>
          <a href="#" className="a1">
            Administration
          </a>
          <a href="#">Infrastructure</a>
          <a href="#">Campus Safety</a>
          <a href="#">Office of the principal</a>
          <a href="#">Facility Services</a>
          <a href="#">Human Resources</a>
        </div>
        <div className="acad">
          <h4>Academics</h4>
          <a href="#" className="a1">
            Time Schedule
          </a>
          <a href="#">Library</a>
          <a href="#">Canvas</a>
          <a href="#">Catalyst</a>
          <a href="#">Teaching Staff</a>
          <a href="#">Apply For Admission</a>
        </div>
        <div className="c-l">
          <h4>Campus life</h4>
          <a href="#" className="a1">
            Accessibility
          </a>
          <a href="#">Financial Aid</a>
          <a href="#">Technologies</a>
          <a href="#">Student Life</a>
          <a href="#">Discipline</a>
          <a href="#">Athletics</a>
        </div>
      </div>
      <div className="social">
        <i class="fab fa-facebook-f fa-2x"></i>
        <i class="fab fa-instagram fa-2x"></i>
        <i class="fab fa-twitter fa-2x"></i>
        <i class="fab fa-youtube fa-2x"></i>
        <i class="fab fa-google-plus-g fa-2x"></i>
        <i class="fab fa-skype fa-2x"></i>
      </div>
    </>
  );
};

export default Footer;
