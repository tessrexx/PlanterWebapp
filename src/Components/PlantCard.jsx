// API Imports
import React from "react";
// MUI Library & Component Imports
import { Button, Checkbox } from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// Infile CSS Import
import "./PlantCard.css";

// Component for plant cards on selection page
// Displays template for plants
const PlantCard = ({ plantImage, plantName, addToPlanner }) => {
  // Called when checkbox checked
  const handleAddToPlanner = () => {
    addToPlanner(plantName);
  };

  // Output
  return (
    <div className="card">
      <img className="image" src={plantImage} alt="" />
      <div className="details">
        <Checkbox
          icon={<CircleOutlinedIcon />}
          checkedIcon={<CheckCircleIcon />}
          onChange={handleAddToPlanner}
        />
        <p className="name">{plantName}</p>
      </div>
    </div>
  );
};

// Export from module
export default PlantCard;
