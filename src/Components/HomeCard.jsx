/* START OF IMPORTS */

// API Imports
import React from "react";
// Infile CSS Import
import "./HomeCard.css";

/* END OF IMPORTS */

// ***********************************************************

/* START OF HomeCard() COMPONENT */

// Component for info cards on home page
// Displays template for website features
const HomeCard = ({ title, image, info }) => {
  /* START OF FRONT-END OUTPUT */
  return (
    <div className="infoCard">
      <img className="infoImage" src={image} alt="app features" />
      <h3 className="title">{title}</h3>
      <p className="info">{info}</p>{" "}
    </div>
  );
};
/* END OF FRONT-END OUTPUT */

// Export from module
export default HomeCard;

/* END OF HomeCard() COMPONENT */
