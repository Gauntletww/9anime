import React from "react";
import logo from "../9anime.png";
export default function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="left_nav">
        <i className="fa-solid fa-bars"></i>
        <img src={logo} alt="" />
        <div className="search">
          <input type="text" placeholder="Enter anime name" className="input_box"/>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="social_media">
          <a href="https://twitter.com//" className="socail_media_icons">
          <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://twitter.com//" className="socail_media_icons">
          <i className="fa-solid fa-paper-plane"></i>
          </a>
          <a href="https://twitter.com//" className="socail_media_icons">
          <i className="fa-brands fa-reddit-alien"></i>
          </a>
        </div>
      </div>
      <div className="right_nav">
        <button>Sign in</button>
      </div>
    </nav>
  );
}
