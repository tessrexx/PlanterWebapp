import React from "react";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import "./PlantSelection.css";
import PlantCard from "../Components/PlantCard";
import plantData from "../Data/PlantInfo.json";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../Components/PageLayout.css";

function PlantSelection() {
  // State Variable
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="layout-container">
      <Navbar />
      <div>
        <div className="layout-main">
          <div className="layout-left-right-flex">
            <div className="layout-left">
              <Button
                className="plantTypeButton"
                variant="contained"
                color="secondary"
              >
                ALL
              </Button>
              <Button
                className="plantTypeButton"
                variant="outlined"
                color="primary"
              >
                VEGETABLE
              </Button>
              <Button
                className="plantTypeButton"
                variant="outlined"
                color="primary"
              >
                FRUIT
              </Button>
              <Button
                className="plantTypeButton"
                variant="outlined"
                color="primary"
              >
                HERB
              </Button>
            </div>
            <div className="layout-right">
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
            </div>
          </div>
          <div className="layout-body">
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
                      <PlantCard plantImage={data.image} plantName={data.id} />
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
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default PlantSelection;
