import React from 'react'
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import instagram from "../../img/instagram.png";
import MyLogo from "../../img/BG3.png";

import './footer.css';

const Footer = () => {

    return (
        <div className='footer'>

            <div className="f-content">
                <div>
                    <img src={MyLogo} alt="logo"
                        width={100} className='logo' />
                </div>

                <div className='f-text'>
                    <span>
                        Copyright &#169; 2023,
                    </span>
                    <span className='f-cont-text'>SeunFola</span>
                </div>
                <div className="f-icons">
                    <a href="https://github.com/Seunfola">
                        <img src={Github} alt="github" />

                    </a>
                    <a href="https://www.linkedin.com/in/folahan-m-37b48bb2/">
                        <img src={LinkedIn} alt="linkedin" />

                    </a>
                    <a href="https://www.instagram.com/clanbreed/">
                        <img src={instagram} alt="instgram" />

                    </a>
                </div>
                <div className='footer-notes'>
                    <div className='nav'>
                        <span>HTML5</span>
                        <span>CSS3</span>
                        <span>Javascript</span>
                        <span>Typescript</span>
                        <span>React.js ...</span>

                    </div>
                    <div className='nav'>
                        <span>Home</span>
                        <span>services</span>
                        <span>Experience</span>
                        <span>Portfolio</span>
                        <span>Recommendation</span>
                    </div>

                    <div className='Cont-details'>
                        <p>Email: <span>Seunfola1@gmail.com</span></p>
                        <p>Address: <span>Lagos, Nigeria</span></p>
                        <p>Github: <span>github.com/seunfola</span></p>
                        <p>Phone Number: <span>08152832520</span></p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer