import "./PlantCard.css";
import React from "react";
import { Checkbox } from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

//component
const PlantCard = ({ plantClassName, plantImage, plantName }) => {
  return (
    <div className="card">
      <img className="image" src={plantImage} alt="" />
      <div className="details">
        <Checkbox
          icon={<CircleOutlinedIcon />}
          checkedIcon={<CheckCircleIcon />}
        />
        <p className="name">{plantName}</p>{" "}
      </div>
    </div>
  );
};

export default PlantCard;
