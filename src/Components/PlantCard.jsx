import React from "react";
import "./PlantCard.css";
import { Checkbox } from "@mui/material";

//component
const PlantCard = ({ plantClassName, plantImage, plantName }) => {
  return (
    <div className="card">
      <img className="image" src={plantImage} />
      <div className="details">
        <p className="name">{plantName}</p>{" "}
        <img
          className="infoIcon"
          src={"https://file.rendit.io/n/idQeHMpzrFWr7UbDPSMs.svg"}
        />
      </div>
    </div>
  );
};

export default PlantCard;
