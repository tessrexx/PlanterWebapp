// API Imports
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// Temp Plant Data File Import
import plantData from "../Data/PlantInfo.json";
// MUI Library & Component Imports
import { Button, TextField, Tab, Box } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
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
  // Tab selection set/state
  const [value, setValue] = useState("1");

  // Filter data function
  const filterResult = (plantTypes) => {
    const result = plantData.filter((currentData) => {
      return currentData.type === plantTypes;
    });
    setData(result);
  };

  // Tab selection change handler function
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Output
  return (
    <div className="layout-container">
      <Navbar />
      <div>
        <div className="layout-main">
          <TabContext value={value}>
            <Box>
              <TabList onChange={handleChange}>
                <Tab label="ALL" value="1" onClick={() => setData(plantData)} />
                <Tab
                  label="VEGETABLE"
                  value="2"
                  onLoad={() => filterResult("vegetable")}
                />
                <Tab
                  label="FRUIT"
                  value="3"
                  onClick={() => filterResult("fruit")}
                />
                <Tab
                  label="HERB"
                  value="4"
                  onClick={() => filterResult("herb")}
                />
              </TabList>
            </Box>
            <TabPanel value="1">
              <div className="plantContainer">
                {data.map((values) => {
                  return (
                    <PlantCard
                      plantImage={values.image}
                      plantName={values.id}
                    />
                  );
                })}
              </div>
            </TabPanel>
            <TabPanel value="2">
              <div className="plantContainer">
                {data.map((values) => {
                  return (
                    <PlantCard
                      plantImage={values.image}
                      plantName={values.id}
                    />
                  );
                })}
              </div>
            </TabPanel>
            <TabPanel value="3">
              <div className="plantContainer">
                {data.map((values) => {
                  return (
                    <PlantCard
                      plantImage={values.image}
                      plantName={values.id}
                    />
                  );
                })}
              </div>
            </TabPanel>
            <TabPanel value="4">
              <div className="plantContainer">
                {data.map((values) => {
                  return (
                    <PlantCard
                      plantImage={values.image}
                      plantName={values.id}
                    />
                  );
                })}
              </div>
            </TabPanel>
          </TabContext>
          <div className="layout-right">
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
