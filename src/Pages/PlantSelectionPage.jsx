// API Imports
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// Temp Plant Data File Import
import plantData from "../Data/PlantInfo.json";
// MUI Library & Component Imports
import { Button, TextField } from "@mui/material";
// Infile CSS & Component Imports
import "./PlantSelection.css";
import "../Components/PageLayout.css";
import PlantCard from "../Components/PlantCard";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

// Function for page /plantselection
// Contains plants that users can select for their planner along with category filter tabs
function PlantSelection() {
  // Filter data set/state
  const [data, setData] = useState(plantData);

  // Filter data function
  const filterResult = (plantTypes) => {
    const result = plantData.filter((currentData) => {
      return currentData.type === plantTypes;
    });
    setData(result);
  };

  // Output
  return (
    <div className="layout-container">
      <Navbar />
      <div>
        <div className="layout-main">
          <div className="layout-left-right-flex">
            <div className="layout-left">
              <Button
                className="plantTypeButton"
                variant="outlined"
                color="primary"
                onClick={() => setData(plantData)}
              >
                ALL
              </Button>
              <Button
                className="plantTypeButton"
                variant="outlined"
                color="primary"
                onClick={() => filterResult("vegetable")}
              >
                VEGETABLE
              </Button>
              <Button
                className="plantTypeButton"
                variant="outlined"
                color="primary"
                onClick={() => filterResult("fruit")}
              >
                FRUIT
              </Button>
              <Button
                className="plantTypeButton"
                variant="outlined"
                color="primary"
                onClick={() => filterResult("herb")}
              >
                HERB
              </Button>
            </div>
            <div className="layout-right">
              <TextField
                className="searchBar"
                id="searchInput"
                type="text"
                placeholder="Search..."
              />
            </div>
          </div>
          <div className="layout-body">
            <div className="plantContainer">
              {data.map((values) => {
                return (
                  <PlantCard plantImage={values.image} plantName={values.id} />
                );
              })}
            </div>
            <Link to="/planner" className="addButton">
              <Button variant="contained" color="secondary">
                ADD TO PLANTER
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

// Export from module
export default PlantSelection;
