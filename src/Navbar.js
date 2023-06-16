import {Link} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import content from './Content/content_en.json'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <h1>Thomas Bærentsen</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/About">About me</Link>

        <div className="dropdown">
          <Link to="/Portfolio">Portfolio</Link>
          <div className="dropdown-content">
            <Link to="/ShapeChangeLamp" className="dropdown-item">{content.SOS_title}</Link>
            <Link to="/Spaceship" className="dropdown-item">{content.spaceship_title}</Link>
            <Link to="/KLS" className="dropdown-item">{content.KLS_title}</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;