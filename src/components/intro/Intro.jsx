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
        <span>I'm Folahan Mosunmola </span>
        <span>A Software Engineer</span>
        <span>
          Hi, I am a software developer that loves building powerful,<br />
          interactive and extensible web applications using modern technologies and stack. <br />
          I love writing clean, optimized, extensible and self-explanatory code that meets industry standard.
        </span>

        <div className="i-icons">
          <a href="https://github.com/Seunfola">
            <img src={Github} alt="github" />
            <p className="icon-text">GitHub</p>
          </a>
          <a href="https://www.linkedin.com/in/folahan-m-37b48bb2/">
            <img src={LinkedIn} alt="linkedin" />
            <p className="icon-text">LinkedIn</p>
          </a>
          <a href="https://www.instagram.com/clanbreed/">
            <img src={instagram} alt="instgram" />
            <p className="icon-text">Instagram</p>
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
