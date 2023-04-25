import React from "react";
import "./works.css";
import Facebook from "../../img/Facebook.png";
import Bulb from "../../img/Bulb.png";
import Upwork from "../../img/Upwork.png";
import Udemy from "../../img/Udemy.png";
import freecode from "../../img/freecode.png";

const Works = () => {
  return (
    <div className="works">
      <div className="leftdiv">
        <span> Worked and Learned Under All These </span>
        <span>Brands & Clients</span>

        <span>
          Designing and implementing the user interface of a website or
          application, this includes creating layouts, designing buttons and
          other interface elements, and ensuring that the interface is easy to
          use and navigate.
        </span>
      </div>
      <div className="Work-right-div">
        <div className="w-main-circle">
          <div className="w-sec-circle">
            <img src={freecode} alt="FreeCode" />
          </div>
          <div className="w-sec-circle">
            <img src={Facebook} alt="facebook" />
          </div>
          <div className="w-sec-circle">
            <img src={Udemy} alt="udemy" />
          </div>
          <div className="w-sec-circle">
            <img src={Bulb} alt="Bulb" />
          </div>
          <div className="w-sec-circle">
            <img src={Upwork} alt="upwork" />
          </div>
        </div>
        <div className="w-back-circle bluecircle"></div>
        <div className="w-back-circle yellowcircle"></div>
      </div>
    </div>
  );
};

export default Works;
