import React from 'react'
import Wave1 from "../../img/wave1.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import './footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <img src={Wave1} alt="" style={{ width: "100%" }} />
            <div className="f-content">
                <span>seunfola1@gmail.com</span>
                <div className="f-icons">
                    <Insta color="white" size={"3rem"} />
                    <Facebook color="white" size={"3rem"} />
                    <Gitub color="white" size={"3rem"} />
                </div>
            </div>
        </div>
    )
}

export default Footer