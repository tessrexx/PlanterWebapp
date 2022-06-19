// API Imports
import React from "react";
// MUI Library & Component Imports
import { Button, Checkbox, IconButton } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// Infile CSS Import
import "./PlantCard.css";

// Component for plant cards on selection page
// Displays template for plants
const PlantCard = ({
  plantImage,
  plantName,
  addToPlanner,
  removeFromPlanner,
}) => {
  // Called "Add" button clicked
  const handleAddToPlanner = () => {
    addToPlanner(plantName);
  };

  // Called "Remove" button clicked
  const handleRemoveFromPlanner = () => {
    removeFromPlanner(plantName);
  };

  // Output
  return (
    <div className="card">
      <img className="image" src={plantImage} alt="" />
      <div className="details">
        <IconButton
          className="removeButton"
          aria-label="remove"
          onClick={handleRemoveFromPlanner}
        >
          <RemoveCircleIcon color="secondary" />
        </IconButton>
        <p className="name">{plantName}</p>

        <IconButton
          className="addButton"
          aria-label="add"
          onClick={handleAddToPlanner}
        >
          <AddCircleIcon color="secondary" />
        </IconButton>
      </div>
    </div>
  );
};

// Export from module
export default PlantCard;
