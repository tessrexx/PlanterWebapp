// API Imports
import React, { useState } from "react";
// In-file CSS & Component Imports
import "./FlipCard.css";

// Component for info flip card on /planner page
// Contains fields for planting tips and flips on hover
const FlipCard = ({ image, title, information }) => {
  // Output
  return (
    <div className="flipCard">
      <div className="flipCardInner">
        <div className="cardFace cardFace--front">
          <img className="infoImage" src={image} alt="" />
          <h3 className="cardTitle">{title}</h3>
        </div>
        <div className="cardFace cardFace--back">
          <h3 className="header">{title}</h3>
          <p className="information">{information}</p>
        </div>
      </div>
    </div>
  );
};

// Export from module
export default FlipCard;
