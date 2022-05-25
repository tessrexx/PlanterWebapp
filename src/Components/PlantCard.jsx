import "./PlantCard.css";
import React from "react";
import { IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

//component
const PlantCard = ({ plantClassName, plantImage, plantName }) => {
  return (
    <div className="card">
      <img className="image" src={plantImage} />
      <div className="details">
        <IconButton aria-label="info" disableRipple>
          <InfoIcon className="infoIcon" />
        </IconButton>
        <p className="name">{plantName}</p>{" "}
      </div>
    </div>
  );
};

export default PlantCard;
