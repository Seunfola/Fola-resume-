import React from "react";
import "./card.css";

const CardConstruct = ({ emoji, heading, details }) => {
  return (
    <div className="cards">
      <img src={emoji} alt=" " />
      <span>{heading}</span>
      <span>{details}</span>
      <button className="c-button">LEARN MORE</button>
    </div>
  );
};

export default CardConstruct;
