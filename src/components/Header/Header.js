import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h2 className="logo">Modern Business</h2>
      <nav>
        <ul className="nav-links">
  <li><a href="#home">Home</a></li>
  <li><a href="#services">Services</a></li>
  <li><a href="#portfolio">Portfolio</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>

      </nav>
    </header>
  );
}

export default Header;
