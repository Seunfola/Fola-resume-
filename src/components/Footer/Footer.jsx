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

                <img src={MyLogo} alt="logo"
                    width={100} />


                <div className='f-text'>Copyright &#169; 2023, <span className='f-cont-text'>                   SeunFola             </span>
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
            </div>
            </div>
    
    )
}

export default Footer