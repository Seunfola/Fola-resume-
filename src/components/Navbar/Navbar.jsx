import React from "react";
import "./navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="n-wrapper " id="Navbar">
      <div className="n-left" >
        <div className="n-name">Folahanmi</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li><Link activeClass="active" to="services" spy={true} smooth={true}>
              Services
            </Link>
            </li>
            <li>
              <Link activeClass="active" to="experience" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="portfolio" spy={true} smooth={true}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link activeClass="active" to="recommendation" spy={true} smooth={true}>
                Recommendation
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
