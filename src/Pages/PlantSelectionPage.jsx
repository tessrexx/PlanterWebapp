import "./PlantSelection.css";
import "../Components/PageLayout.css";
import React from "react";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import plantData from "../Data/PlantInfo.json";
import PlantCard from "../Components/PlantCard";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

function PlantSelection() {
  // State Variable
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(plantData);

  //Function
  const filterResult = (plantTypes) => {
    const result = plantData.filter((currentData) => {
      return currentData.type === plantTypes;
    });
    setData(result);
  };

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
export default PlantSelection;
