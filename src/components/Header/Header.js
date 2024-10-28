// src/components/Header.js
import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible((prevState) => !prevState); // Toggle visibility
  };

  const handleBackClick = () => {
    setIsNavVisible(false); // Hide the nav when back button is clicked
  };

  return (
    <div className="static-nav">
      <div className="Sec1-header">
        <div className="logo">
          {/* <img
            src="https://play-lh.googleusercontent.com/Mb0hTPOXe4Wawdr-sRHrc-kqxlwkw1MMw6HD9COZVWyW5WQB-26gG5n5sYyyU83ZE1rh=w240-h480-rw"
            alt="logo"
          /> */}
          <p>
            Next <br />
            Gen <br />
            Learning
          </p>
        </div>
        <button className="nav-toggle" onClick={toggleNav}>
          ☰
        </button>
        <nav className={`navbar1 ${isNavVisible ? "show" : ""}`}>
          <button className="back-button" onClick={handleBackClick}>
            ←
          </button>
          <div className="nav">
            <ul className={isNavVisible ? "show" : ""}>
              <li>
                <a href="/">
                  <b>Home</b>
                </a>
              </li>
              <li>
                <a href="/Courses">
                  <b>Courses</b>
                </a>
              </li>
              <li>
                <a href="/Blog">
                  <b>Blog</b>
                </a>
              </li>
              <li>
                <a href="/Contact">
                  <b>Contact Us</b>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
