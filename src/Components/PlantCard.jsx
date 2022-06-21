/* START OF IMPORTS */

// API Imports
import React from "react";
// MUI Library & Component Imports
import { IconButton } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
// Infile CSS Import
import "./PlantCard.css";

/* END OF IMPORTS */

// ***********************************************************

/* START OF PlantCard() COMPONENT */

// Component for plant cards on selection page
// Displays template for plants
const PlantCard = ({
  plantImage,
  plantName,
  addToPlanner,
  removeFromPlanner,
}) => {
  /* START OF BACK-END FUNCTIONS */

  // Called when "Add+" button clicked
  const handleAddToPlanner = () => {
    addToPlanner(plantName);
  };

  // Called when "Remove-" button clicked
  const handleRemoveFromPlanner = () => {
    removeFromPlanner(plantName);
  };

  /* END OF BACK-END FUNCTIONS */

  // ***********************************************************

  /* START OF FRONT-END OUTPUT */
  return (
    <div className="card">
      <img className="image" src={plantImage} alt="plant" />
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
/* END OF FRONT-END OUTPUT */

// Export from module
export default PlantCard;

/* END OF PlantCard() COMPONENT */
