// API Imports
import React from "react";
// Infile CSS Import
import "./PlannerBar.css";

// Component for yearly planner on Planner Page
// Displays plant name, image, planting months, and harvest times
const PlannerBar = ({ title, roundimage, months, harvest }) => {
  // Output
  return (
    <div className="plantbar">
      <div className="plantNameAndImageContainer">
        <div className="imageContainer">
          <img className="plantImageRound" src={roundimage} alt="" />
        </div>
        <h4>{title}</h4>
      </div>
      <div className="plantingMonthsContainer">
        <h4>{months}</h4>
      </div>
      <div className="plantingHarvestContainer">
        <h4>{harvest}</h4>
      </div>
    </div>
  );
};

// Export from module
export default PlannerBar;
