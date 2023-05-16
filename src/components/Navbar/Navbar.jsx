import React from "react";
import { useState } from "react";
import "./navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from 'react-scroll';
import { BiAlignJustify } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 880) {
      return { right: !menuOpened && "-100%" }
    }
  }

  return (
    <div className="n-wrapper " id="Navbar">
      <div className="n-left" >
        <div className="n-name">Folahanmi</div>
        <Toggle />
      </div>
      <div className="n-right">
        {/* <OutsideClickHandler onOutsideClick={() => menuOpened(false)}> */}
        <div className="n-list">
          
            <ul className="menu" style={ getMenuStyles(menuOpened) } >
            <li>
              <Link activeClass="active" to="intro" spy={true} smooth={true}>
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
            <Link to="contact" spy={true} smooth={true}>
              <button className="button n-button">Contact</button>
            </Link>
          </ul>
          
        </div>
       
        <div className='menu-icon' onClick={() => setMenuOpened((prev) => !prev)}>
          < BiAlignJustify size={35} /> </div>
      {/* </OutsideClickHandler> */}
      </div>
    </div>
  );
};

export default Navbar;
