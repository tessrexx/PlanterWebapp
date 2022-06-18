// API Imports
import React from "react";
// MUI Library & Component Imports
import { Button, Checkbox, Hidden } from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// Infile CSS Import
import "./PlantCard.css";

// Component for plant cards on selection page
// Displays template for plants
const PlantCard = ({
  plantImage,
  plantName,
  plantRoundImage,
  plantType,
  plantHarvest,
  plantJanImage,
  plantFebImage,
  plantMarImage,
  plantAprImage,
  plantMayImage,
  plantJunImage,
  plantJulImage,
  plantAugImage,
  plantSepImage,
  plantOctImage,
  plantNovImage,
  plantDecImage,
  plantRecc,
  plantInfo1,
  plantInfo2,
  plantInfo3,
  plantInfo4,
  addToPlanner,
}) => {
  // Called when checkbox checked
  const handleAddToPlanner = () => {
    addToPlanner(
      plantName,
      plantImage,
      plantRoundImage,
      plantType,
      plantHarvest,
      plantJanImage,
      plantFebImage,
      plantMarImage,
      plantAprImage,
      plantMayImage,
      plantJunImage,
      plantJulImage,
      plantAugImage,
      plantSepImage,
      plantOctImage,
      plantNovImage,
      plantDecImage,
      plantRecc,
      plantInfo1,
      plantInfo2,
      plantInfo3,
      plantInfo4
    );
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
        <img className="hiddenInfo" src={(plantRoundImage, Hidden)} alt="" />
        <p className="hiddenInfo">{(plantType, Hidden)}</p>
        <p className="hiddenInfo">{(plantHarvest, Hidden)}</p>
        <img className="hiddenInfo" src={(plantJanImage, Hidden)} alt="" />
        <img className="hiddenInfo" src={(plantFebImage, Hidden)} alt="" />
        <img className="hiddenInfo" src={(plantMarImage, Hidden)} alt="" />
        <img className="hiddenInfo" src={(plantAprImage, Hidden)} alt="" />
        <img className="hiddenInfo" src={(plantMayImage, Hidden)} alt="" />
        <img className="hiddenInfo" src={(plantJunImage, Hidden)} alt="" />
        <img className="hiddenInfo" src={(plantJulImage, Hidden)} alt="" />
        <img className="hiddenInfo" src={(plantAugImage, Hidden)} alt="" />
        <img className="hiddenInfo" src={(plantSepImage, Hidden)} alt="" />
        <img className="hiddenInfo" src={(plantOctImage, Hidden)} alt="" />
        <img className="hiddenInfo" src={(plantNovImage, Hidden)} alt="" />
        <img className="hiddenInfo" src={(plantDecImage, Hidden)} alt="" />
        <p className="hiddenInfo">{(plantRecc, Hidden)}</p>
        <p className="hiddenInfo">{(plantInfo1, Hidden)}</p>
        <p className="hiddenInfo">{(plantInfo2, Hidden)}</p>
        <p className="hiddenInfo">{(plantInfo3, Hidden)}</p>
        <p className="hiddenInfo">{(plantInfo4, Hidden)}</p>
      </div>
    </div>
  );
};

// Export from module
export default PlantCard;
