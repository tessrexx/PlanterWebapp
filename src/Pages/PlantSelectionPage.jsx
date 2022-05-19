import React from "react";
import { Button } from "@mui/material";
import "./PlantSelection.css";
import PlantCard from "../Components/PlantCard";
import plantData from "../Data/PlantInfo.json";

function PlantSelection() {
  const plantImage = "DEFAULTIMAGE";
  const plantName = "PLANTNAME";

  return (
    <div>
      <Button className="plantTypeButton" variant="contained" color="secondary">
        ALL
      </Button>
      <Button className="plantTypeButton" variant="outlined" color="primary">
        VEGETABLE
      </Button>
      <Button className="plantTypeButton" variant="outlined" color="primary">
        FRUIT
      </Button>
      <Button className="plantTypeButton" variant="outlined" color="primary">
        HERB
      </Button>

      <div className="plantContainer">
        {plantData.map((data) => {
          return <PlantCard plantImage={data.image} plantName={data.title} />;
        })}
      </div>

      <div className="addButton">
        <Button variant="contained" color="secondary">
          ADD TO PLANTER
        </Button>
      </div>
    </div>
  );
}
export default PlantSelection;
