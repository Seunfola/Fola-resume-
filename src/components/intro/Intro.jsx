import React from "react";
import "./intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import instagram from "../../img/instagram.png";
import newfoli from "../../img/newfoli.jpg";

const Intro = () => {
  return (
    <div className="intro">

      <div className="i-name">
        <span>Hello! I Am </span>
        <span>Folahan Mosunmola </span>
        <span>
          A pragmatic, diligent and talented Frontend Developer with high level of <br />Experience in web designing
          and development, producing quality work.
        </span>
       
        <div className="i-icons">
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
      <div className="i-right">
        <img src={newfoli} alt="profile" />
      </div>
    </div>
  );
};

export default Intro;
