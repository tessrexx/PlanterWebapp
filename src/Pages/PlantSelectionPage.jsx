import React from "react";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import "./PlantSelection.css";
import PlantCard from "../Components/PlantCard";
import plantData from "../Data/PlantInfo.json";

function PlantSelection() {
  // State Variable
  const [searchTerm, setSearchTerm] = useState("");

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
      <TextField
        // SEARCH BAR
        className="searchBar"
        id="searchInput"
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />

      <div className="plantContainer">
        {
          // Searchbar method
          plantData
            .filter((val) => {
              // Show all plants if search field empty
              if (searchTerm == "") {
                return val;
              }
              // Else-if will return any matching data searched
              else if (
                val.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((data) => {
              return (
                <PlantCard plantImage={data.image} plantName={data.title} />
              );
            })
        }
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
