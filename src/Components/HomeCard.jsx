// API Imports
import React from "react";
// Infile CSS Import
import "./HomeCard.css";

// Function for info cards on home page
// Displays template for website features
const HomeCard = ({ title, image, info }) => {
  // Output
  return (
    <div className="infoCard">
      <img className="infoImage" src={image} alt="" />
      <h3 className="title">{title}</h3>
      <p className="info">{info}</p>{" "}
    </div>
  );
};

// Export from module
export default HomeCard;
