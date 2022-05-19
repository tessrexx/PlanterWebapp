import React from "react";
import { Button, Grid } from "@mui/material";
import "./PlantSelection.css";
import PlantCard from "../Components/PlantCard";

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
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/apple.png`}
          plantName={"Apple"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/asparagus.png`}
          plantName={"Asparagus"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/basil.png`}
          plantName={"Basil"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/beetroot.png`}
          plantName={"Beetroot"}
        />
        <PlantCard
          plantImage={`${process.env.PUBLIC_URL}plantImages/blueberry .png`}
          plantName={"Blueberry"}
        />
      </div>
    </div>
  );
}
export default PlantSelection;
